/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { SentPrice } from "../clprice/sentPrice";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { Price } from "../clprice/price";
export const protobufPackage = "jboetticher.simpleclcosmos.clprice";
const baseQueryGetSentPriceRequest = { id: 0 };
export const QueryGetSentPriceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSentPriceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetSentPriceRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSentPriceRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetSentPriceResponse = {};
export const QueryGetSentPriceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.SentPrice !== undefined) {
            SentPrice.encode(message.SentPrice, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSentPriceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SentPrice = SentPrice.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetSentPriceResponse,
        };
        if (object.SentPrice !== undefined && object.SentPrice !== null) {
            message.SentPrice = SentPrice.fromJSON(object.SentPrice);
        }
        else {
            message.SentPrice = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.SentPrice !== undefined &&
            (obj.SentPrice = message.SentPrice
                ? SentPrice.toJSON(message.SentPrice)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSentPriceResponse,
        };
        if (object.SentPrice !== undefined && object.SentPrice !== null) {
            message.SentPrice = SentPrice.fromPartial(object.SentPrice);
        }
        else {
            message.SentPrice = undefined;
        }
        return message;
    },
};
const baseQueryAllSentPriceRequest = {};
export const QueryAllSentPriceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSentPriceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllSentPriceRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSentPriceRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllSentPriceResponse = {};
export const QueryAllSentPriceResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.SentPrice) {
            SentPrice.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSentPriceResponse,
        };
        message.SentPrice = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SentPrice.push(SentPrice.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllSentPriceResponse,
        };
        message.SentPrice = [];
        if (object.SentPrice !== undefined && object.SentPrice !== null) {
            for (const e of object.SentPrice) {
                message.SentPrice.push(SentPrice.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.SentPrice) {
            obj.SentPrice = message.SentPrice.map((e) => e ? SentPrice.toJSON(e) : undefined);
        }
        else {
            obj.SentPrice = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSentPriceResponse,
        };
        message.SentPrice = [];
        if (object.SentPrice !== undefined && object.SentPrice !== null) {
            for (const e of object.SentPrice) {
                message.SentPrice.push(SentPrice.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetPriceRequest = { id: 0 };
export const QueryGetPriceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPriceRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPriceRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPriceRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetPriceResponse = {};
export const QueryGetPriceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Price !== undefined) {
            Price.encode(message.Price, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPriceResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Price = Price.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPriceResponse };
        if (object.Price !== undefined && object.Price !== null) {
            message.Price = Price.fromJSON(object.Price);
        }
        else {
            message.Price = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Price !== undefined &&
            (obj.Price = message.Price ? Price.toJSON(message.Price) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPriceResponse };
        if (object.Price !== undefined && object.Price !== null) {
            message.Price = Price.fromPartial(object.Price);
        }
        else {
            message.Price = undefined;
        }
        return message;
    },
};
const baseQueryAllPriceRequest = {};
export const QueryAllPriceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPriceRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPriceRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPriceRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllPriceResponse = {};
export const QueryAllPriceResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Price) {
            Price.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPriceResponse };
        message.Price = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Price.push(Price.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPriceResponse };
        message.Price = [];
        if (object.Price !== undefined && object.Price !== null) {
            for (const e of object.Price) {
                message.Price.push(Price.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Price) {
            obj.Price = message.Price.map((e) => (e ? Price.toJSON(e) : undefined));
        }
        else {
            obj.Price = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPriceResponse };
        message.Price = [];
        if (object.Price !== undefined && object.Price !== null) {
            for (const e of object.Price) {
                message.Price.push(Price.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SentPrice(request) {
        const data = QueryGetSentPriceRequest.encode(request).finish();
        const promise = this.rpc.request("jboetticher.simpleclcosmos.clprice.Query", "SentPrice", data);
        return promise.then((data) => QueryGetSentPriceResponse.decode(new Reader(data)));
    }
    SentPriceAll(request) {
        const data = QueryAllSentPriceRequest.encode(request).finish();
        const promise = this.rpc.request("jboetticher.simpleclcosmos.clprice.Query", "SentPriceAll", data);
        return promise.then((data) => QueryAllSentPriceResponse.decode(new Reader(data)));
    }
    Price(request) {
        const data = QueryGetPriceRequest.encode(request).finish();
        const promise = this.rpc.request("jboetticher.simpleclcosmos.clprice.Query", "Price", data);
        return promise.then((data) => QueryGetPriceResponse.decode(new Reader(data)));
    }
    PriceAll(request) {
        const data = QueryAllPriceRequest.encode(request).finish();
        const promise = this.rpc.request("jboetticher.simpleclcosmos.clprice.Query", "PriceAll", data);
        return promise.then((data) => QueryAllPriceResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
