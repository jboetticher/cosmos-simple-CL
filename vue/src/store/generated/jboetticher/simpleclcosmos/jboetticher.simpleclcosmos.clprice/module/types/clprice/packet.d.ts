import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "jboetticher.simpleclcosmos.clprice";
export interface ClpricePacketData {
    noData: NoData | undefined;
    /** this line is used by starport scaffolding # ibc/packet/proto/field */
    ibcPricePacket: IbcPricePacketData | undefined;
}
export interface NoData {
}
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
export declare const ClpricePacketData: {
    encode(message: ClpricePacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ClpricePacketData;
    fromJSON(object: any): ClpricePacketData;
    toJSON(message: ClpricePacketData): unknown;
    fromPartial(object: DeepPartial<ClpricePacketData>): ClpricePacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
export declare const IbcPricePacketData: {
    encode(message: IbcPricePacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcPricePacketData;
    fromJSON(object: any): IbcPricePacketData;
    toJSON(message: IbcPricePacketData): unknown;
    fromPartial(object: DeepPartial<IbcPricePacketData>): IbcPricePacketData;
};
export declare const IbcPricePacketAck: {
    encode(message: IbcPricePacketAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcPricePacketAck;
    fromJSON(object: any): IbcPricePacketAck;
    toJSON(message: IbcPricePacketAck): unknown;
    fromPartial(object: DeepPartial<IbcPricePacketAck>): IbcPricePacketAck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
