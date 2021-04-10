// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdatePrice } from "./types/simpleclcosmos/tx";
import { MsgDeletePrice } from "./types/simpleclcosmos/tx";
import { MsgCreatePrice } from "./types/simpleclcosmos/tx";


const types = [
  ["/jboetticher.simpleclcosmos.simpleclcosmos.MsgUpdatePrice", MsgUpdatePrice],
  ["/jboetticher.simpleclcosmos.simpleclcosmos.MsgDeletePrice", MsgDeletePrice],
  ["/jboetticher.simpleclcosmos.simpleclcosmos.MsgCreatePrice", MsgCreatePrice],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgUpdatePrice: (data: MsgUpdatePrice): EncodeObject => ({ typeUrl: "/jboetticher.simpleclcosmos.simpleclcosmos.MsgUpdatePrice", value: data }),
    msgDeletePrice: (data: MsgDeletePrice): EncodeObject => ({ typeUrl: "/jboetticher.simpleclcosmos.simpleclcosmos.MsgDeletePrice", value: data }),
    msgCreatePrice: (data: MsgCreatePrice): EncodeObject => ({ typeUrl: "/jboetticher.simpleclcosmos.simpleclcosmos.MsgCreatePrice", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
