/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "jboetticher.simpleclcosmos.clprice";

export interface ClpricePacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  ibcPricePacket: IbcPricePacketData | undefined;
}

export interface NoData {}

/**
 * this line is used by starport scaffolding # ibc/packet/proto/message
 * IbcPricePacketData defines a struct for the packet payload
 */
export interface IbcPricePacketData {
  name: string;
  price: number;
  date: number;
}

/** IbcPricePacketAck defines a struct for the packet acknowledgment */
export interface IbcPricePacketAck {
  priceID: string;
}

const baseClpricePacketData: object = {};

export const ClpricePacketData = {
  encode(message: ClpricePacketData, writer: Writer = Writer.create()): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.ibcPricePacket !== undefined) {
      IbcPricePacketData.encode(
        message.ibcPricePacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ClpricePacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClpricePacketData } as ClpricePacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.ibcPricePacket = IbcPricePacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClpricePacketData {
    const message = { ...baseClpricePacketData } as ClpricePacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    if (object.ibcPricePacket !== undefined && object.ibcPricePacket !== null) {
      message.ibcPricePacket = IbcPricePacketData.fromJSON(
        object.ibcPricePacket
      );
    } else {
      message.ibcPricePacket = undefined;
    }
    return message;
  },

  toJSON(message: ClpricePacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.ibcPricePacket !== undefined &&
      (obj.ibcPricePacket = message.ibcPricePacket
        ? IbcPricePacketData.toJSON(message.ibcPricePacket)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ClpricePacketData>): ClpricePacketData {
    const message = { ...baseClpricePacketData } as ClpricePacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    if (object.ibcPricePacket !== undefined && object.ibcPricePacket !== null) {
      message.ibcPricePacket = IbcPricePacketData.fromPartial(
        object.ibcPricePacket
      );
    } else {
      message.ibcPricePacket = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
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

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },
};

const baseIbcPricePacketData: object = { name: "", price: 0, date: 0 };

export const IbcPricePacketData = {
  encode(
    message: IbcPricePacketData,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): IbcPricePacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIbcPricePacketData } as IbcPricePacketData;
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

  fromJSON(object: any): IbcPricePacketData {
    const message = { ...baseIbcPricePacketData } as IbcPricePacketData;
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

  toJSON(message: IbcPricePacketData): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.price !== undefined && (obj.price = message.price);
    message.date !== undefined && (obj.date = message.date);
    return obj;
  },

  fromPartial(object: DeepPartial<IbcPricePacketData>): IbcPricePacketData {
    const message = { ...baseIbcPricePacketData } as IbcPricePacketData;
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

const baseIbcPricePacketAck: object = { priceID: "" };

export const IbcPricePacketAck = {
  encode(message: IbcPricePacketAck, writer: Writer = Writer.create()): Writer {
    if (message.priceID !== "") {
      writer.uint32(10).string(message.priceID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): IbcPricePacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIbcPricePacketAck } as IbcPricePacketAck;
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

  fromJSON(object: any): IbcPricePacketAck {
    const message = { ...baseIbcPricePacketAck } as IbcPricePacketAck;
    if (object.priceID !== undefined && object.priceID !== null) {
      message.priceID = String(object.priceID);
    } else {
      message.priceID = "";
    }
    return message;
  },

  toJSON(message: IbcPricePacketAck): unknown {
    const obj: any = {};
    message.priceID !== undefined && (obj.priceID = message.priceID);
    return obj;
  },

  fromPartial(object: DeepPartial<IbcPricePacketAck>): IbcPricePacketAck {
    const message = { ...baseIbcPricePacketAck } as IbcPricePacketAck;
    if (object.priceID !== undefined && object.priceID !== null) {
      message.priceID = object.priceID;
    } else {
      message.priceID = "";
    }
    return message;
  },
};

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
