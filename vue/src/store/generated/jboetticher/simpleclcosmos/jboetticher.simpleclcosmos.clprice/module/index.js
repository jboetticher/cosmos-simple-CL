// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeletePrice } from "./types/clprice/tx";
import { MsgCreatePrice } from "./types/clprice/tx";
import { MsgUpdateSentPrice } from "./types/clprice/tx";
import { MsgUpdatePrice } from "./types/clprice/tx";
import { MsgDeleteSentPrice } from "./types/clprice/tx";
import { MsgSendIbcPrice } from "./types/clprice/tx";
import { MsgCreateSentPrice } from "./types/clprice/tx";
const types = [
    ["/jboetticher.simpleclcosmos.clprice.MsgDeletePrice", MsgDeletePrice],
    ["/jboetticher.simpleclcosmos.clprice.MsgCreatePrice", MsgCreatePrice],
    ["/jboetticher.simpleclcosmos.clprice.MsgUpdateSentPrice", MsgUpdateSentPrice],
    ["/jboetticher.simpleclcosmos.clprice.MsgUpdatePrice", MsgUpdatePrice],
    ["/jboetticher.simpleclcosmos.clprice.MsgDeleteSentPrice", MsgDeleteSentPrice],
    ["/jboetticher.simpleclcosmos.clprice.MsgSendIbcPrice", MsgSendIbcPrice],
    ["/jboetticher.simpleclcosmos.clprice.MsgCreateSentPrice", MsgCreateSentPrice],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgDeletePrice: (data) => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgDeletePrice", value: data }),
        msgCreatePrice: (data) => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgCreatePrice", value: data }),
        msgUpdateSentPrice: (data) => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgUpdateSentPrice", value: data }),
        msgUpdatePrice: (data) => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgUpdatePrice", value: data }),
        msgDeleteSentPrice: (data) => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgDeleteSentPrice", value: data }),
        msgSendIbcPrice: (data) => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgSendIbcPrice", value: data }),
        msgCreateSentPrice: (data) => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgCreateSentPrice", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
