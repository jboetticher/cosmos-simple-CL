/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "jboetticher.simpleclcosmos.clprice";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreatePrice {
  creator: string;
  name: string;
  price: number;
  date: number;
}

export interface MsgCreatePriceResponse {
  id: number;
}

export interface MsgUpdatePrice {
  creator: string;
  id: number;
  name: string;
  price: number;
  date: number;
}

export interface MsgUpdatePriceResponse {}

export interface MsgDeletePrice {
  creator: string;
  id: number;
}

export interface MsgDeletePriceResponse {}

const baseMsgCreatePrice: object = { creator: "", name: "", price: 0, date: 0 };

export const MsgCreatePrice = {
  encode(message: MsgCreatePrice, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.price !== 0) {
      writer.uint32(24).int32(message.price);
    }
    if (message.date !== 0) {
      writer.uint32(32).int32(message.date);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePrice {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePrice } as MsgCreatePrice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.price = reader.int32();
          break;
        case 4:
          message.date = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePrice {
    const message = { ...baseMsgCreatePrice } as MsgCreatePrice;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price);
    } else {
      message.price = 0;
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = Number(object.date);
    } else {
      message.date = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePrice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.price !== undefined && (obj.price = message.price);
    message.date !== undefined && (obj.date = message.date);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePrice>): MsgCreatePrice {
    const message = { ...baseMsgCreatePrice } as MsgCreatePrice;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = 0;
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = 0;
    }
    return message;
  },
};

const baseMsgCreatePriceResponse: object = { id: 0 };

export const MsgCreatePriceResponse = {
  encode(
    message: MsgCreatePriceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePriceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePriceResponse } as MsgCreatePriceResponse;
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

  fromJSON(object: any): MsgCreatePriceResponse {
    const message = { ...baseMsgCreatePriceResponse } as MsgCreatePriceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePriceResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePriceResponse>
  ): MsgCreatePriceResponse {
    const message = { ...baseMsgCreatePriceResponse } as MsgCreatePriceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePrice: object = {
  creator: "",
  id: 0,
  name: "",
  price: 0,
  date: 0,
};

export const MsgUpdatePrice = {
  encode(message: MsgUpdatePrice, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.price !== 0) {
      writer.uint32(32).int32(message.price);
    }
    if (message.date !== 0) {
      writer.uint32(40).int32(message.date);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePrice {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePrice } as MsgUpdatePrice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.price = reader.int32();
          break;
        case 5:
          message.date = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePrice {
    const message = { ...baseMsgUpdatePrice } as MsgUpdatePrice;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price);
    } else {
      message.price = 0;
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = Number(object.date);
    } else {
      message.date = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdatePrice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.price !== undefined && (obj.price = message.price);
    message.date !== undefined && (obj.date = message.date);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePrice>): MsgUpdatePrice {
    const message = { ...baseMsgUpdatePrice } as MsgUpdatePrice;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = 0;
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = 0;
    }
    return message;
  },
};

const baseMsgUpdatePriceResponse: object = {};

export const MsgUpdatePriceResponse = {
  encode(_: MsgUpdatePriceResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePriceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePriceResponse } as MsgUpdatePriceResponse;
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

  fromJSON(_: any): MsgUpdatePriceResponse {
    const message = { ...baseMsgUpdatePriceResponse } as MsgUpdatePriceResponse;
    return message;
  },

  toJSON(_: MsgUpdatePriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdatePriceResponse>): MsgUpdatePriceResponse {
    const message = { ...baseMsgUpdatePriceResponse } as MsgUpdatePriceResponse;
    return message;
  },
};

const baseMsgDeletePrice: object = { creator: "", id: 0 };

export const MsgDeletePrice = {
  encode(message: MsgDeletePrice, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePrice {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePrice } as MsgDeletePrice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePrice {
    const message = { ...baseMsgDeletePrice } as MsgDeletePrice;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeletePrice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePrice>): MsgDeletePrice {
    const message = { ...baseMsgDeletePrice } as MsgDeletePrice;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeletePriceResponse: object = {};

export const MsgDeletePriceResponse = {
  encode(_: MsgDeletePriceResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePriceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePriceResponse } as MsgDeletePriceResponse;
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

  fromJSON(_: any): MsgDeletePriceResponse {
    const message = { ...baseMsgDeletePriceResponse } as MsgDeletePriceResponse;
    return message;
  },

  toJSON(_: MsgDeletePriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeletePriceResponse>): MsgDeletePriceResponse {
    const message = { ...baseMsgDeletePriceResponse } as MsgDeletePriceResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreatePrice(request: MsgCreatePrice): Promise<MsgCreatePriceResponse>;
  UpdatePrice(request: MsgUpdatePrice): Promise<MsgUpdatePriceResponse>;
  DeletePrice(request: MsgDeletePrice): Promise<MsgDeletePriceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreatePrice(request: MsgCreatePrice): Promise<MsgCreatePriceResponse> {
    const data = MsgCreatePrice.encode(request).finish();
    const promise = this.rpc.request(
      "jboetticher.simpleclcosmos.clprice.Msg",
      "CreatePrice",
      data
    );
    return promise.then((data) =>
      MsgCreatePriceResponse.decode(new Reader(data))
    );
  }

  UpdatePrice(request: MsgUpdatePrice): Promise<MsgUpdatePriceResponse> {
    const data = MsgUpdatePrice.encode(request).finish();
    const promise = this.rpc.request(
      "jboetticher.simpleclcosmos.clprice.Msg",
      "UpdatePrice",
      data
    );
    return promise.then((data) =>
      MsgUpdatePriceResponse.decode(new Reader(data))
    );
  }

  DeletePrice(request: MsgDeletePrice): Promise<MsgDeletePriceResponse> {
    const data = MsgDeletePrice.encode(request).finish();
    const promise = this.rpc.request(
      "jboetticher.simpleclcosmos.clprice.Msg",
      "DeletePrice",
      data
    );
    return promise.then((data) =>
      MsgDeletePriceResponse.decode(new Reader(data))
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
