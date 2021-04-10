export interface ClpriceMsgCreatePriceResponse {
    /** @format uint64 */
    id?: string;
}
export interface ClpriceMsgCreateSentPriceResponse {
    /** @format uint64 */
    id?: string;
}
export declare type ClpriceMsgDeletePriceResponse = object;
export declare type ClpriceMsgDeleteSentPriceResponse = object;
export declare type ClpriceMsgSendIbcPriceResponse = object;
export declare type ClpriceMsgUpdatePriceResponse = object;
export declare type ClpriceMsgUpdateSentPriceResponse = object;
export interface ClpricePrice {
    creator?: string;
    /** @format uint64 */
    id?: string;
    name?: string;
    /** @format int32 */
    price?: number;
    /** @format int32 */
    date?: number;
}
export interface ClpriceQueryAllPriceResponse {
    Price?: ClpricePrice[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface ClpriceQueryAllSentPriceResponse {
    SentPrice?: ClpriceSentPrice[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface ClpriceQueryGetPriceResponse {
    Price?: ClpricePrice;
}
export interface ClpriceQueryGetSentPriceResponse {
    SentPrice?: ClpriceSentPrice;
}
export interface ClpriceSentPrice {
    creator?: string;
    /** @format uint64 */
    id?: string;
    priceID?: string;
    name?: string;
    chain?: string;
}
export interface ProtobufAny {
    typeUrl?: string;
    /** @format byte */
    value?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title clprice/genesis.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryPriceAll
     * @request GET:/jboetticher/simpleclcosmos/clprice/price
     */
    queryPriceAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<ClpriceQueryAllPriceResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPrice
     * @request GET:/jboetticher/simpleclcosmos/clprice/price/{id}
     */
    queryPrice: (id: string, params?: RequestParams) => Promise<HttpResponse<ClpriceQueryGetPriceResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySentPriceAll
     * @request GET:/jboetticher/simpleclcosmos/clprice/sentPrice
     */
    querySentPriceAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<ClpriceQueryAllSentPriceResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySentPrice
     * @summary this line is used by starport scaffolding # 2
     * @request GET:/jboetticher/simpleclcosmos/clprice/sentPrice/{id}
     */
    querySentPrice: (id: string, params?: RequestParams) => Promise<HttpResponse<ClpriceQueryGetSentPriceResponse, RpcStatus>>;
}
export {};
