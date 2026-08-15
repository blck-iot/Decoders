# BLCK IoT — Signed LoRaWAN Payload Decoders

Payload decoders for BLCK IoT-supplied LoRaWAN sensors, ready to load into
your own LoRaWAN Network Server (LNS). If you purchased a sensor from us and
want to run your own decoding instead of (or alongside) our managed
integration, this is the place to get the exact decoder for your device and
network.

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
device.

A handful of devices also have a copy directly under `blck-signed/` or
`blck-signed/<manufacturer>/` (no network subfolder) — these are equivalent
to their nested counterpart and kept for backward compatibility with
existing integrations that already reference them directly.

## Using a decoder

1. Find your device's file under the folder matching your network.
2. Open your LNS's payload/codec configuration for that device (in
   ThingPark, ChirpStack, The Things Stack, or Helium Console this is
   usually called "Payload formatter," "Codec," or "Decoder function").
3. Paste the file's contents in.

Each file already declares the correct entry-point function for its network
folder — no editing required:

| Network | Entry point |
|---|---|
| Actility (ThingPark) | `decodeUplink(input)` (`Decode(fPort, bytes)` also defined, for existing integrations calling it directly) |
| ChirpStack v4 | `decodeUplink(input)` (`Decode(fPort, bytes, variables)` also defined, for existing integrations calling it directly) |
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

## Support

Questions about integrating a specific device, or payload fields you're not
sure about: **hello@blck-iot.com**

## License

Proprietary — see each file's own header (`SPDX-License-Identifier:
LicenseRef-BLCK-IoT-Proprietary`) for terms. Provided for use with BLCK
IoT-supplied hardware; redistribution or modification without attribution
constitutes copyright infringement per each file's license notice.
