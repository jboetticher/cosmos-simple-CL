/* eslint-disable */
import { SentPrice } from "../clprice/sentPrice";
import { Price } from "../clprice/price";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "jboetticher.simpleclcosmos.clprice";
const baseGenesisState = { portId: "" };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.sentPriceList) {
            SentPrice.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.priceList) {
            Price.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.sentPriceList = [];
        message.priceList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.sentPriceList.push(SentPrice.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.priceList.push(Price.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.portId = reader.string();
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
        message.sentPriceList = [];
        message.priceList = [];
        if (object.sentPriceList !== undefined && object.sentPriceList !== null) {
            for (const e of object.sentPriceList) {
                message.sentPriceList.push(SentPrice.fromJSON(e));
            }
        }
        if (object.priceList !== undefined && object.priceList !== null) {
            for (const e of object.priceList) {
                message.priceList.push(Price.fromJSON(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.sentPriceList) {
            obj.sentPriceList = message.sentPriceList.map((e) => e ? SentPrice.toJSON(e) : undefined);
        }
        else {
            obj.sentPriceList = [];
        }
        if (message.priceList) {
            obj.priceList = message.priceList.map((e) => e ? Price.toJSON(e) : undefined);
        }
        else {
            obj.priceList = [];
        }
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.sentPriceList = [];
        message.priceList = [];
        if (object.sentPriceList !== undefined && object.sentPriceList !== null) {
            for (const e of object.sentPriceList) {
                message.sentPriceList.push(SentPrice.fromPartial(e));
            }
        }
        if (object.priceList !== undefined && object.priceList !== null) {
            for (const e of object.priceList) {
                message.priceList.push(Price.fromPartial(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = "";
        }
        return message;
    },
};
