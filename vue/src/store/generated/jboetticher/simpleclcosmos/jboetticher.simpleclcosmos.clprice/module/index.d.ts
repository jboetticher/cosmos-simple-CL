import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteSentPrice } from "./types/clprice/tx";
import { MsgSendIbcPrice } from "./types/clprice/tx";
import { MsgUpdatePrice } from "./types/clprice/tx";
import { MsgCreateSentPrice } from "./types/clprice/tx";
import { MsgCreatePrice } from "./types/clprice/tx";
import { MsgUpdateSentPrice } from "./types/clprice/tx";
import { MsgDeletePrice } from "./types/clprice/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeleteSentPrice: (data: MsgDeleteSentPrice) => EncodeObject;
    msgSendIbcPrice: (data: MsgSendIbcPrice) => EncodeObject;
    msgUpdatePrice: (data: MsgUpdatePrice) => EncodeObject;
    msgCreateSentPrice: (data: MsgCreateSentPrice) => EncodeObject;
    msgCreatePrice: (data: MsgCreatePrice) => EncodeObject;
    msgUpdateSentPrice: (data: MsgUpdateSentPrice) => EncodeObject;
    msgDeletePrice: (data: MsgDeletePrice) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
