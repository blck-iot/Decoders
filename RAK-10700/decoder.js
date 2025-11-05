// Node-RED Function: Decode RAK10700 Cayenne LPP from msg.payload Object

// Ensure msg.payload is parsed JSON and contains .data (base64 string)
var base64 = msg.payload.data;
if (typeof base64 !== 'string') {
    node.error("Payload must contain base64 string in msg.payload.data");
    return null;
}
var bytes = Buffer.from(base64, 'base64');

// Helpers
function signedInt(arr) {
    var val = 0;
    for (var i = 0; i < arr.length; i++) val = (val << 8) | arr[i];
    var edge = 1 << (arr.length * 8);
    var max = (edge - 1) >> 1;
    if (val > max) val -= edge;
    return val;
}
function unsignedInt(arr) {
    var val = 0;
    for (var i = 0; i < arr.length; i++) val = (val << 8) | arr[i];
    return val;
}

var output = {};
var i = 0;
while (i < bytes.length) {
    var channel = bytes[i++];
    var type = bytes[i++];

    // Location (type 136, 0x88)
    if (type === 0x88) {
        var lat = signedInt([bytes[i], bytes[i + 1], bytes[i + 2]]) / 10000;
        var lon = signedInt([bytes[i + 3], bytes[i + 4], bytes[i + 5]]) / 10000;
        var alt = signedInt([bytes[i + 6], bytes[i + 7], bytes[i + 8]]) / 100;
        output['location_channel_' + channel] = { latitude: lat, longitude: lon, altitude: alt };
        i += 9;
        continue;
    }
    // Humidity (type 104, 0x68)
    if (type === 0x68) {
        var val = bytes[i] / 2;
        output['humidity_channel_' + channel] = val;
        i += 1;
        continue;
    }
    // Temperature (type 103, 0x67)
    if (type === 0x67) {
        var val = signedInt([bytes[i], bytes[i + 1]]) / 10;
        output['temperature_channel_' + channel] = val;
        i += 2;
        continue;
    }
    // Barometric Pressure (type 115, 0x73)
    if (type === 0x73) {
        var val = unsignedInt([bytes[i], bytes[i + 1]]) / 10;
        output['pressure_channel_' + channel] = val;
        i += 2;
        continue;
    }
    // Analog Value (type 2, 0x02)
    if (type === 0x02) {
        var val = signedInt([bytes[i], bytes[i + 1]]) / 100;
        output['analog_channel_' + channel] = val;
        i += 2;
        continue;
    }
    // Add more types here as needed...

    // Unknown type fallback (try 2-byte unsigned)  
    else {
        // If enough bytes left for 2
        if (i + 1 < bytes.length) {
            var val = unsignedInt([bytes[i], bytes[i + 1]]);
            output['unknown_channel_' + channel + '_type_' + type] = val;
            i += 2;
        } else {
            // Only one left (e.g. single byte)
            output['unknown_channel_' + channel + '_type_' + type] = bytes[i];
            i += 1;
        }
    }
}

msg.payload.decoded = output;
return msg;