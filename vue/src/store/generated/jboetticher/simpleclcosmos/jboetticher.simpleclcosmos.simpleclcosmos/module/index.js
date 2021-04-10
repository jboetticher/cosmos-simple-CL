// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdatePrice } from "./types/simpleclcosmos/tx";
import { MsgDeletePrice } from "./types/simpleclcosmos/tx";
import { MsgCreatePrice } from "./types/simpleclcosmos/tx";
const types = [
    ["/jboetticher.simpleclcosmos.simpleclcosmos.MsgUpdatePrice", MsgUpdatePrice],
    ["/jboetticher.simpleclcosmos.simpleclcosmos.MsgDeletePrice", MsgDeletePrice],
    ["/jboetticher.simpleclcosmos.simpleclcosmos.MsgCreatePrice", MsgCreatePrice],
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
        msgUpdatePrice: (data) => ({ typeUrl: "/jboetticher.simpleclcosmos.simpleclcosmos.MsgUpdatePrice", value: data }),
        msgDeletePrice: (data) => ({ typeUrl: "/jboetticher.simpleclcosmos.simpleclcosmos.MsgDeletePrice", value: data }),
        msgCreatePrice: (data) => ({ typeUrl: "/jboetticher.simpleclcosmos.simpleclcosmos.MsgCreatePrice", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
