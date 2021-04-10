import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "jboetticher.simpleclcosmos.clprice";
export interface SentPrice {
    creator: string;
    id: number;
    priceID: string;
    name: string;
    chain: string;
}
export declare const SentPrice: {
    encode(message: SentPrice, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SentPrice;
    fromJSON(object: any): SentPrice;
    toJSON(message: SentPrice): unknown;
    fromPartial(object: DeepPartial<SentPrice>): SentPrice;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
