/* eslint-disable */
import { Price } from "../simpleclcosmos/price";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "jboetticher.simpleclcosmos.simpleclcosmos";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.priceList) {
            Price.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.priceList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceList.push(Price.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.priceList = [];
        if (object.priceList !== undefined && object.priceList !== null) {
            for (const e of object.priceList) {
                message.priceList.push(Price.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.priceList) {
            obj.priceList = message.priceList.map((e) => e ? Price.toJSON(e) : undefined);
        }
        else {
            obj.priceList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.priceList = [];
        if (object.priceList !== undefined && object.priceList !== null) {
            for (const e of object.priceList) {
                message.priceList.push(Price.fromPartial(e));
            }
        }
        return message;
    },
};
