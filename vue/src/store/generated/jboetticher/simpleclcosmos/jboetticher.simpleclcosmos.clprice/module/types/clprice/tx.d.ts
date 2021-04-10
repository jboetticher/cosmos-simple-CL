import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "jboetticher.simpleclcosmos.clprice";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateSentPrice {
    creator: string;
    priceID: string;
    name: string;
    chain: string;
}
export interface MsgCreateSentPriceResponse {
    id: number;
}
export interface MsgUpdateSentPrice {
    creator: string;
    id: number;
    priceID: string;
    name: string;
    chain: string;
}
export interface MsgUpdateSentPriceResponse {
}
export interface MsgDeleteSentPrice {
    creator: string;
    id: number;
}
export interface MsgDeleteSentPriceResponse {
}
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
export interface MsgUpdatePriceResponse {
}
export interface MsgDeletePrice {
    creator: string;
    id: number;
}
export interface MsgDeletePriceResponse {
}
export declare const MsgCreateSentPrice: {
    encode(message: MsgCreateSentPrice, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSentPrice;
    fromJSON(object: any): MsgCreateSentPrice;
    toJSON(message: MsgCreateSentPrice): unknown;
    fromPartial(object: DeepPartial<MsgCreateSentPrice>): MsgCreateSentPrice;
};
export declare const MsgCreateSentPriceResponse: {
    encode(message: MsgCreateSentPriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSentPriceResponse;
    fromJSON(object: any): MsgCreateSentPriceResponse;
    toJSON(message: MsgCreateSentPriceResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSentPriceResponse>): MsgCreateSentPriceResponse;
};
export declare const MsgUpdateSentPrice: {
    encode(message: MsgUpdateSentPrice, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentPrice;
    fromJSON(object: any): MsgUpdateSentPrice;
    toJSON(message: MsgUpdateSentPrice): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSentPrice>): MsgUpdateSentPrice;
};
export declare const MsgUpdateSentPriceResponse: {
    encode(_: MsgUpdateSentPriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentPriceResponse;
    fromJSON(_: any): MsgUpdateSentPriceResponse;
    toJSON(_: MsgUpdateSentPriceResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSentPriceResponse>): MsgUpdateSentPriceResponse;
};
export declare const MsgDeleteSentPrice: {
    encode(message: MsgDeleteSentPrice, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentPrice;
    fromJSON(object: any): MsgDeleteSentPrice;
    toJSON(message: MsgDeleteSentPrice): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSentPrice>): MsgDeleteSentPrice;
};
export declare const MsgDeleteSentPriceResponse: {
    encode(_: MsgDeleteSentPriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentPriceResponse;
    fromJSON(_: any): MsgDeleteSentPriceResponse;
    toJSON(_: MsgDeleteSentPriceResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSentPriceResponse>): MsgDeleteSentPriceResponse;
};
export declare const MsgCreatePrice: {
    encode(message: MsgCreatePrice, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePrice;
    fromJSON(object: any): MsgCreatePrice;
    toJSON(message: MsgCreatePrice): unknown;
    fromPartial(object: DeepPartial<MsgCreatePrice>): MsgCreatePrice;
};
export declare const MsgCreatePriceResponse: {
    encode(message: MsgCreatePriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePriceResponse;
    fromJSON(object: any): MsgCreatePriceResponse;
    toJSON(message: MsgCreatePriceResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePriceResponse>): MsgCreatePriceResponse;
};
export declare const MsgUpdatePrice: {
    encode(message: MsgUpdatePrice, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePrice;
    fromJSON(object: any): MsgUpdatePrice;
    toJSON(message: MsgUpdatePrice): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePrice>): MsgUpdatePrice;
};
export declare const MsgUpdatePriceResponse: {
    encode(_: MsgUpdatePriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePriceResponse;
    fromJSON(_: any): MsgUpdatePriceResponse;
    toJSON(_: MsgUpdatePriceResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePriceResponse>): MsgUpdatePriceResponse;
};
export declare const MsgDeletePrice: {
    encode(message: MsgDeletePrice, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePrice;
    fromJSON(object: any): MsgDeletePrice;
    toJSON(message: MsgDeletePrice): unknown;
    fromPartial(object: DeepPartial<MsgDeletePrice>): MsgDeletePrice;
};
export declare const MsgDeletePriceResponse: {
    encode(_: MsgDeletePriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePriceResponse;
    fromJSON(_: any): MsgDeletePriceResponse;
    toJSON(_: MsgDeletePriceResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePriceResponse>): MsgDeletePriceResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateSentPrice(request: MsgCreateSentPrice): Promise<MsgCreateSentPriceResponse>;
    UpdateSentPrice(request: MsgUpdateSentPrice): Promise<MsgUpdateSentPriceResponse>;
    DeleteSentPrice(request: MsgDeleteSentPrice): Promise<MsgDeleteSentPriceResponse>;
    CreatePrice(request: MsgCreatePrice): Promise<MsgCreatePriceResponse>;
    UpdatePrice(request: MsgUpdatePrice): Promise<MsgUpdatePriceResponse>;
    DeletePrice(request: MsgDeletePrice): Promise<MsgDeletePriceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateSentPrice(request: MsgCreateSentPrice): Promise<MsgCreateSentPriceResponse>;
    UpdateSentPrice(request: MsgUpdateSentPrice): Promise<MsgUpdateSentPriceResponse>;
    DeleteSentPrice(request: MsgDeleteSentPrice): Promise<MsgDeleteSentPriceResponse>;
    CreatePrice(request: MsgCreatePrice): Promise<MsgCreatePriceResponse>;
    UpdatePrice(request: MsgUpdatePrice): Promise<MsgUpdatePriceResponse>;
    DeletePrice(request: MsgDeletePrice): Promise<MsgDeletePriceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
