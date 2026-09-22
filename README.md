# BLCK IoT — Signed LoRaWAN Payload Decoders

Free, ready-to-paste **LoRaWAN payload decoders** (also called payload
formatters, codecs, or uplink decoders depending on your platform) for
BLCK IoT-supplied sensors — covering **Actility ThingPark**, **ChirpStack
v3/v4**, **The Things Network / The Things Stack (TTN)**, and **Helium
Console**. 55 devices across 8 manufacturers, one file per device per
network — find yours, paste it into your LNS, done.

If you purchased a sensor from BLCK IoT and want to run your own decoding
instead of (or alongside) our managed integration, this is the place to
get the exact decoder for your device and network. Can't find a device
below? Email **hello@blck-iot.com** — we add decoders regularly.

## Supported devices

Every device ships as a signed decoder for all four networks above.
Search this table for your sensor's model number, or use your browser's
find-in-page (Ctrl/Cmd+F).

### Dragino

| Device | Description |
|---|---|
| `cpl01` | CPL01 - Dry Contact Sensor |
| `Dragino_LA66` | Dragino LA66 USB LoRaWAN Adapter — Vehicle Telemetry |
| `laq4` | LAQ4 - Air Quality Sensor |
| `lbt1` | LBT1 - Bluetooth Tracker |
| `ldds04` | LDDS04 - Distance Sensor |
| `ldds20` | LDDS20 - Liquid Level Sensor |
| `ldds45` | LDDS45 - Distance Sensor |
| `ldds75` | LDDS75 - Distance Sensor |
| `lds01` | LDS01 - Door Sensor |
| `lds02` | LDS02 - Door Sensor |
| `lds03a` | LDS03A - Door Sensor |
| `lgt92` | LGT92 - GPS Location Tracker |
| `lht52` | LHT52 - Temperature & Humidity Sensor |
| `lht65` | LHT65 - Temperature & Humidity Sensor |
| `llds12` | LLDS12 - LiDAR Distance Sensor |
| `llms01` | LLMS01 - Leaf Moisture Sensor |
| `lmds200` | LMDS200 - Microwave Radar Distance Sensor |
| `lse01` | LSE01 - Soil Moisture & EC Sensor |
| `lsn50-v2` | LSN50-V2 - Sensor Node |
| `lsn50v2-d20` | LSN50v2-D20 - Temperature Sensor |
| `lsn50v2-d20-d22-d23` | LSN50v2-D20-D22-D23 - Temperature Sensor |
| `lsn50v2-s31` | LSN50v2-S31 - Temperature & Humidity Sensor |
| `lsnpk01` | LSNPK01 - Soil NPK Sensor |
| `lsph01` | LSPH01 - Soil pH Sensor |
| `lt22222-l` | LT22222-L - I/O Controller |
| `lt33222-l` | LT33222-L - I/O Controller |
| `ltc2` | LTC2 - Temperature Transmitter |
| `lwl01` | LWL01 - Water Leak Sensor |
| `lwl02` | LWL02 - Water Leak Sensor |
| `lwl03a` | LWL03A - None-Position Rope Type Water Leak Controller |
| `sw3l` | SW3L - Flow Sensor |
| `trackerd` | TrackerD - GPS Tracker |
| `wsc1-l` | WSC1-L - Weather Station Process Unit |

### GlobalSat

| Device | Description |
|---|---|
| `Globalsat_LT501` | GlobalSat LT-501 Series — LoRaWAN GPS Tracker |

### Qingping

| Device | Description |
|---|---|
| `qingping_indoor_co2_temphumidity` | Qingping Air Monitor Lite (CO2/Temp/Humidity) |
| `qingping_temphumidity` | Qingping Temp & RH Monitor |

### RAKwireless

| Device | Description |
|---|---|
| `RAK10700` | RAK10700 GNSS Tracker (WisBlock) |

### Seeed SenseCAP

| Device | Description |
|---|---|
| `sensecaps2101-temp-humid` | S2101- LoRaWAN® Air Temperature and Humidity Sensor |
| `sensecaps2102-light` | S2102 - LoRaWAN® Light Intensity Sensor |
| `sensecaps2103-co2-temp-humid` | S2103- LoRaWAN® CO2, Temperature, and Humidity Sensor |
| `sensecaps2104-soil-moisture-temp` | S2104 - LoRaWAN® Soil Moisture and Temperature Sensor |
| `sensecaps2105-soll-moisture-temp-ec` | S2105-LoRaWAN® Soil Moisture, Temperature and EC Sensor |
| `SenseCAP_S2120_Decoder` | SenseCAP S2120 8-in-1 LoRaWAN Weather Station (WS2001) |
| `loramodule-e5` | Wio-E5 STM32WLE5JC Module, embedded SX126X and MCU for LoRaWAN® Network |
| `sensecap-air-th` | Wireless Air Temperature and Humidity Sensor - LoRaWAN® |
| `sensecap-pressure` | Wireless Barometric Pressure Sensor - LoRaWAN® |
| `sensecap-co2` | Wireless CO2 Sensor - LoRaWAN® |
| `sensecap-light` | Wireless Light Intensity Sensor - LoRaWAN® |
| `sensecap-soil-th` | Wireless Soil Moisture and Temperature Sensor - LoRaWAN® |

### Seeed Studio

| Device | Description |
|---|---|
| `lorawan-dev-kit` | LoRaWAN Dev Kit |
| `sensecap-indicator` | SenseCAP Indicator |
| `loradevelopkit-e5` | Wio-E5 Dev Kit, for Long Range Application |
| `loraeminidevboard-e5` | Wio-E5 mini (STM32WLE5JC) Dev Board |

### Senseair

| Device | Description |
|---|---|
| `senseair_exploraco2` | Senseair ExploraCO2 (CO2/Temp/Humidity/PM Sensor) |

### VEGA

| Device | Description |
|---|---|
| `vega_vegapulsair` | VEGAPULS Air 23/41/42 Level Measurement Sensor |

## Structure

```
blck-signed/<Network>/<Manufacturer>/<Device>_<Network>_BLCK.js
```

One folder per supported network under `blck-signed/`:

- `Actility/` — ThingPark
- `ChirpStack/` — ChirpStack v3/v4
- `TTN/` — The Things Network / The Things Stack
- `Helium/` — Helium Console

Inside each, one subfolder per manufacturer (`dragino`, `sensecap`, `seeed`,
`rakwireless`, `globalsat`, `senseair`, `qingping`, `vega`), and one file per
device. Every file contains exactly the entry point its own network needs —
nothing from the other three networks — so it matches what you'd expect
from a decoder written specifically for your platform.

## Using a decoder

1. Find your device's file under the folder matching your network (or
   search the table above for your model number).
2. Open your LNS's payload/codec configuration for that device (in
   ThingPark, ChirpStack, The Things Stack, or Helium Console this is
   usually called "Payload formatter," "Codec," or "Decoder function").
3. Paste the file's contents in.

Each file already declares the correct entry-point function for its network
folder — no editing required:

| Network | Entry point |
|---|---|
| Actility (ThingPark) | `decodeUplink(input)` |
| ChirpStack v4 | `decodeUplink(input)` |
| TTN / The Things Stack | `decodeUplink(input)` |
| Helium Console | `Decoder(bytes, port)` |

## Output shape

Every decoder returns:

```js
{
  data: { /* device-specific fields, see the file's own header for the list */ },
  decoder: "BLCK-IoT.com"
}
```

Each file's header (`@param`/`@returns` JSDoc, plus a "Supported frames" and
"Output fields" table) documents that specific device's fields, units, and
frame types.

## FAQ

**My device isn't in the table — can you add it?**
Email **hello@blck-iot.com** with the device model and manufacturer.

**I'm on a network you don't list (ChirpStack v3, Node-RED, a custom
integration)?**
ChirpStack v3 and v4 share the same file — the folder covers both. For
Node-RED or any other JavaScript-capable uplink pipeline, the Actility
variant's `decodeUplink(input)` entry point (`input.fPort`, `input.bytes`)
is the easiest to adapt.

**Are these decoders free?**
Yes — provided for use with BLCK IoT-supplied hardware, see License below.

## Support

Questions about integrating a specific device, or payload fields you're not
sure about: **hello@blck-iot.com**

## License

Proprietary — see each file's own header (`SPDX-License-Identifier:
LicenseRef-BLCK-IoT-Proprietary`) for terms. Provided for use with BLCK
IoT-supplied hardware; redistribution or modification without attribution
constitutes copyright infringement per each file's license notice.
