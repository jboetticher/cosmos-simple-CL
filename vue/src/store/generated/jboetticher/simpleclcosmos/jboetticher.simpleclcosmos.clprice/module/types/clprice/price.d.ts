import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "jboetticher.simpleclcosmos.clprice";
export interface Price {
    creator: string;
    id: number;
    name: string;
    price: number;
    date: number;
}
export declare const Price: {
    encode(message: Price, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Price;
    fromJSON(object: any): Price;
    toJSON(message: Price): unknown;
    fromPartial(object: DeepPartial<Price>): Price;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
