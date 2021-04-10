/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "jboetticher.simpleclcosmos.clprice";
const baseClpricePacketData = {};
export const ClpricePacketData = {
    encode(message, writer = Writer.create()) {
        if (message.noData !== undefined) {
            NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
        }
        if (message.ibcPricePacket !== undefined) {
            IbcPricePacketData.encode(message.ibcPricePacket, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClpricePacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.noData = NoData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ibcPricePacket = IbcPricePacketData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseClpricePacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromJSON(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.ibcPricePacket !== undefined && object.ibcPricePacket !== null) {
            message.ibcPricePacket = IbcPricePacketData.fromJSON(object.ibcPricePacket);
        }
        else {
            message.ibcPricePacket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.noData !== undefined &&
            (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
        message.ibcPricePacket !== undefined &&
            (obj.ibcPricePacket = message.ibcPricePacket
                ? IbcPricePacketData.toJSON(message.ibcPricePacket)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseClpricePacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromPartial(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.ibcPricePacket !== undefined && object.ibcPricePacket !== null) {
            message.ibcPricePacket = IbcPricePacketData.fromPartial(object.ibcPricePacket);
        }
        else {
            message.ibcPricePacket = undefined;
        }
        return message;
    },
};
const baseNoData = {};
export const NoData = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNoData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseNoData };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseNoData };
        return message;
    },
};
const baseIbcPricePacketData = { name: "", price: 0, date: 0 };
export const IbcPricePacketData = {
    encode(message, writer = Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.price !== 0) {
            writer.uint32(16).int32(message.price);
        }
        if (message.date !== 0) {
            writer.uint32(24).int32(message.date);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIbcPricePacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.price = reader.int32();
                    break;
                case 3:
                    message.date = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIbcPricePacketData };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        if (object.date !== undefined && object.date !== null) {
            message.date = Number(object.date);
        }
        else {
            message.date = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.price !== undefined && (obj.price = message.price);
        message.date !== undefined && (obj.date = message.date);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIbcPricePacketData };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        if (object.date !== undefined && object.date !== null) {
            message.date = object.date;
        }
        else {
            message.date = 0;
        }
        return message;
    },
};
const baseIbcPricePacketAck = { priceID: "" };
export const IbcPricePacketAck = {
    encode(message, writer = Writer.create()) {
        if (message.priceID !== "") {
            writer.uint32(10).string(message.priceID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIbcPricePacketAck };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIbcPricePacketAck };
        if (object.priceID !== undefined && object.priceID !== null) {
            message.priceID = String(object.priceID);
        }
        else {
            message.priceID = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.priceID !== undefined && (obj.priceID = message.priceID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIbcPricePacketAck };
        if (object.priceID !== undefined && object.priceID !== null) {
            message.priceID = object.priceID;
        }
        else {
            message.priceID = "";
        }
        return message;
    },
};
