/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { SentPrice } from "../clprice/sentPrice";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Price } from "../clprice/price";

export const protobufPackage = "jboetticher.simpleclcosmos.clprice";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetSentPriceRequest {
  id: number;
}

export interface QueryGetSentPriceResponse {
  SentPrice: SentPrice | undefined;
}

export interface QueryAllSentPriceRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSentPriceResponse {
  SentPrice: SentPrice[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPriceRequest {
  id: number;
}

export interface QueryGetPriceResponse {
  Price: Price | undefined;
}

export interface QueryAllPriceRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPriceResponse {
  Price: Price[];
  pagination: PageResponse | undefined;
}

const baseQueryGetSentPriceRequest: object = { id: 0 };

export const QueryGetSentPriceRequest = {
  encode(
    message: QueryGetSentPriceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSentPriceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSentPriceRequest,
    } as QueryGetSentPriceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSentPriceRequest {
    const message = {
      ...baseQueryGetSentPriceRequest,
    } as QueryGetSentPriceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetSentPriceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSentPriceRequest>
  ): QueryGetSentPriceRequest {
    const message = {
      ...baseQueryGetSentPriceRequest,
    } as QueryGetSentPriceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetSentPriceResponse: object = {};

export const QueryGetSentPriceResponse = {
  encode(
    message: QueryGetSentPriceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.SentPrice !== undefined) {
      SentPrice.encode(message.SentPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSentPriceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSentPriceResponse,
    } as QueryGetSentPriceResponse;
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

  fromJSON(object: any): QueryGetSentPriceResponse {
    const message = {
      ...baseQueryGetSentPriceResponse,
    } as QueryGetSentPriceResponse;
    if (object.SentPrice !== undefined && object.SentPrice !== null) {
      message.SentPrice = SentPrice.fromJSON(object.SentPrice);
    } else {
      message.SentPrice = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSentPriceResponse): unknown {
    const obj: any = {};
    message.SentPrice !== undefined &&
      (obj.SentPrice = message.SentPrice
        ? SentPrice.toJSON(message.SentPrice)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSentPriceResponse>
  ): QueryGetSentPriceResponse {
    const message = {
      ...baseQueryGetSentPriceResponse,
    } as QueryGetSentPriceResponse;
    if (object.SentPrice !== undefined && object.SentPrice !== null) {
      message.SentPrice = SentPrice.fromPartial(object.SentPrice);
    } else {
      message.SentPrice = undefined;
    }
    return message;
  },
};

const baseQueryAllSentPriceRequest: object = {};

export const QueryAllSentPriceRequest = {
  encode(
    message: QueryAllSentPriceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSentPriceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSentPriceRequest,
    } as QueryAllSentPriceRequest;
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

  fromJSON(object: any): QueryAllSentPriceRequest {
    const message = {
      ...baseQueryAllSentPriceRequest,
    } as QueryAllSentPriceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSentPriceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSentPriceRequest>
  ): QueryAllSentPriceRequest {
    const message = {
      ...baseQueryAllSentPriceRequest,
    } as QueryAllSentPriceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSentPriceResponse: object = {};

export const QueryAllSentPriceResponse = {
  encode(
    message: QueryAllSentPriceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.SentPrice) {
      SentPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSentPriceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSentPriceResponse,
    } as QueryAllSentPriceResponse;
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

  fromJSON(object: any): QueryAllSentPriceResponse {
    const message = {
      ...baseQueryAllSentPriceResponse,
    } as QueryAllSentPriceResponse;
    message.SentPrice = [];
    if (object.SentPrice !== undefined && object.SentPrice !== null) {
      for (const e of object.SentPrice) {
        message.SentPrice.push(SentPrice.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSentPriceResponse): unknown {
    const obj: any = {};
    if (message.SentPrice) {
      obj.SentPrice = message.SentPrice.map((e) =>
        e ? SentPrice.toJSON(e) : undefined
      );
    } else {
      obj.SentPrice = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSentPriceResponse>
  ): QueryAllSentPriceResponse {
    const message = {
      ...baseQueryAllSentPriceResponse,
    } as QueryAllSentPriceResponse;
    message.SentPrice = [];
    if (object.SentPrice !== undefined && object.SentPrice !== null) {
      for (const e of object.SentPrice) {
        message.SentPrice.push(SentPrice.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetPriceRequest: object = { id: 0 };

export const QueryGetPriceRequest = {
  encode(
    message: QueryGetPriceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPriceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPriceRequest } as QueryGetPriceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPriceRequest {
    const message = { ...baseQueryGetPriceRequest } as QueryGetPriceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPriceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPriceRequest>): QueryGetPriceRequest {
    const message = { ...baseQueryGetPriceRequest } as QueryGetPriceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPriceResponse: object = {};

export const QueryGetPriceResponse = {
  encode(
    message: QueryGetPriceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Price !== undefined) {
      Price.encode(message.Price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPriceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPriceResponse } as QueryGetPriceResponse;
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

  fromJSON(object: any): QueryGetPriceResponse {
    const message = { ...baseQueryGetPriceResponse } as QueryGetPriceResponse;
    if (object.Price !== undefined && object.Price !== null) {
      message.Price = Price.fromJSON(object.Price);
    } else {
      message.Price = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPriceResponse): unknown {
    const obj: any = {};
    message.Price !== undefined &&
      (obj.Price = message.Price ? Price.toJSON(message.Price) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPriceResponse>
  ): QueryGetPriceResponse {
    const message = { ...baseQueryGetPriceResponse } as QueryGetPriceResponse;
    if (object.Price !== undefined && object.Price !== null) {
      message.Price = Price.fromPartial(object.Price);
    } else {
      message.Price = undefined;
    }
    return message;
  },
};

const baseQueryAllPriceRequest: object = {};

export const QueryAllPriceRequest = {
  encode(
    message: QueryAllPriceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPriceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPriceRequest } as QueryAllPriceRequest;
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

  fromJSON(object: any): QueryAllPriceRequest {
    const message = { ...baseQueryAllPriceRequest } as QueryAllPriceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPriceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPriceRequest>): QueryAllPriceRequest {
    const message = { ...baseQueryAllPriceRequest } as QueryAllPriceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPriceResponse: object = {};

export const QueryAllPriceResponse = {
  encode(
    message: QueryAllPriceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Price) {
      Price.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPriceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPriceResponse } as QueryAllPriceResponse;
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

  fromJSON(object: any): QueryAllPriceResponse {
    const message = { ...baseQueryAllPriceResponse } as QueryAllPriceResponse;
    message.Price = [];
    if (object.Price !== undefined && object.Price !== null) {
      for (const e of object.Price) {
        message.Price.push(Price.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPriceResponse): unknown {
    const obj: any = {};
    if (message.Price) {
      obj.Price = message.Price.map((e) => (e ? Price.toJSON(e) : undefined));
    } else {
      obj.Price = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPriceResponse>
  ): QueryAllPriceResponse {
    const message = { ...baseQueryAllPriceResponse } as QueryAllPriceResponse;
    message.Price = [];
    if (object.Price !== undefined && object.Price !== null) {
      for (const e of object.Price) {
        message.Price.push(Price.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  SentPrice(
    request: QueryGetSentPriceRequest
  ): Promise<QueryGetSentPriceResponse>;
  SentPriceAll(
    request: QueryAllSentPriceRequest
  ): Promise<QueryAllSentPriceResponse>;
  Price(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse>;
  PriceAll(request: QueryAllPriceRequest): Promise<QueryAllPriceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SentPrice(
    request: QueryGetSentPriceRequest
  ): Promise<QueryGetSentPriceResponse> {
    const data = QueryGetSentPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "jboetticher.simpleclcosmos.clprice.Query",
      "SentPrice",
      data
    );
    return promise.then((data) =>
      QueryGetSentPriceResponse.decode(new Reader(data))
    );
  }

  SentPriceAll(
    request: QueryAllSentPriceRequest
  ): Promise<QueryAllSentPriceResponse> {
    const data = QueryAllSentPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "jboetticher.simpleclcosmos.clprice.Query",
      "SentPriceAll",
      data
    );
    return promise.then((data) =>
      QueryAllSentPriceResponse.decode(new Reader(data))
    );
  }

  Price(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse> {
    const data = QueryGetPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "jboetticher.simpleclcosmos.clprice.Query",
      "Price",
      data
    );
    return promise.then((data) =>
      QueryGetPriceResponse.decode(new Reader(data))
    );
  }

  PriceAll(request: QueryAllPriceRequest): Promise<QueryAllPriceResponse> {
    const data = QueryAllPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "jboetticher.simpleclcosmos.clprice.Query",
      "PriceAll",
      data
    );
    return promise.then((data) =>
      QueryAllPriceResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
