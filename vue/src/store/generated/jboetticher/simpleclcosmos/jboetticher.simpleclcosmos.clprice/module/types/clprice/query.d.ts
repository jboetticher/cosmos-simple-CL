import { Reader, Writer } from "protobufjs/minimal";
import { SentPrice } from "../clprice/sentPrice";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Price } from "../clprice/price";
export declare const protobufPackage = "jboetticher.simpleclcosmos.clprice";
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
export declare const QueryGetSentPriceRequest: {
    encode(message: QueryGetSentPriceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSentPriceRequest;
    fromJSON(object: any): QueryGetSentPriceRequest;
    toJSON(message: QueryGetSentPriceRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSentPriceRequest>): QueryGetSentPriceRequest;
};
export declare const QueryGetSentPriceResponse: {
    encode(message: QueryGetSentPriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSentPriceResponse;
    fromJSON(object: any): QueryGetSentPriceResponse;
    toJSON(message: QueryGetSentPriceResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSentPriceResponse>): QueryGetSentPriceResponse;
};
export declare const QueryAllSentPriceRequest: {
    encode(message: QueryAllSentPriceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSentPriceRequest;
    fromJSON(object: any): QueryAllSentPriceRequest;
    toJSON(message: QueryAllSentPriceRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSentPriceRequest>): QueryAllSentPriceRequest;
};
export declare const QueryAllSentPriceResponse: {
    encode(message: QueryAllSentPriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSentPriceResponse;
    fromJSON(object: any): QueryAllSentPriceResponse;
    toJSON(message: QueryAllSentPriceResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSentPriceResponse>): QueryAllSentPriceResponse;
};
export declare const QueryGetPriceRequest: {
    encode(message: QueryGetPriceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPriceRequest;
    fromJSON(object: any): QueryGetPriceRequest;
    toJSON(message: QueryGetPriceRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPriceRequest>): QueryGetPriceRequest;
};
export declare const QueryGetPriceResponse: {
    encode(message: QueryGetPriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPriceResponse;
    fromJSON(object: any): QueryGetPriceResponse;
    toJSON(message: QueryGetPriceResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPriceResponse>): QueryGetPriceResponse;
};
export declare const QueryAllPriceRequest: {
    encode(message: QueryAllPriceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPriceRequest;
    fromJSON(object: any): QueryAllPriceRequest;
    toJSON(message: QueryAllPriceRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPriceRequest>): QueryAllPriceRequest;
};
export declare const QueryAllPriceResponse: {
    encode(message: QueryAllPriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPriceResponse;
    fromJSON(object: any): QueryAllPriceResponse;
    toJSON(message: QueryAllPriceResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPriceResponse>): QueryAllPriceResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    SentPrice(request: QueryGetSentPriceRequest): Promise<QueryGetSentPriceResponse>;
    SentPriceAll(request: QueryAllSentPriceRequest): Promise<QueryAllSentPriceResponse>;
    Price(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse>;
    PriceAll(request: QueryAllPriceRequest): Promise<QueryAllPriceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    SentPrice(request: QueryGetSentPriceRequest): Promise<QueryGetSentPriceResponse>;
    SentPriceAll(request: QueryAllSentPriceRequest): Promise<QueryAllSentPriceResponse>;
    Price(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse>;
    PriceAll(request: QueryAllPriceRequest): Promise<QueryAllPriceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
