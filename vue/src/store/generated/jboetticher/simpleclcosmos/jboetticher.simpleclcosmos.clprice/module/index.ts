// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSentPrice } from "./types/clprice/tx";
import { MsgDeletePrice } from "./types/clprice/tx";
import { MsgDeleteSentPrice } from "./types/clprice/tx";
import { MsgUpdateSentPrice } from "./types/clprice/tx";
import { MsgUpdatePrice } from "./types/clprice/tx";
import { MsgSendIbcPrice } from "./types/clprice/tx";
import { MsgCreatePrice } from "./types/clprice/tx";


const types = [
  ["/jboetticher.simpleclcosmos.clprice.MsgCreateSentPrice", MsgCreateSentPrice],
  ["/jboetticher.simpleclcosmos.clprice.MsgDeletePrice", MsgDeletePrice],
  ["/jboetticher.simpleclcosmos.clprice.MsgDeleteSentPrice", MsgDeleteSentPrice],
  ["/jboetticher.simpleclcosmos.clprice.MsgUpdateSentPrice", MsgUpdateSentPrice],
  ["/jboetticher.simpleclcosmos.clprice.MsgUpdatePrice", MsgUpdatePrice],
  ["/jboetticher.simpleclcosmos.clprice.MsgSendIbcPrice", MsgSendIbcPrice],
  ["/jboetticher.simpleclcosmos.clprice.MsgCreatePrice", MsgCreatePrice],
  
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
    msgCreateSentPrice: (data: MsgCreateSentPrice): EncodeObject => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgCreateSentPrice", value: data }),
    msgDeletePrice: (data: MsgDeletePrice): EncodeObject => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgDeletePrice", value: data }),
    msgDeleteSentPrice: (data: MsgDeleteSentPrice): EncodeObject => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgDeleteSentPrice", value: data }),
    msgUpdateSentPrice: (data: MsgUpdateSentPrice): EncodeObject => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgUpdateSentPrice", value: data }),
    msgUpdatePrice: (data: MsgUpdatePrice): EncodeObject => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgUpdatePrice", value: data }),
    msgSendIbcPrice: (data: MsgSendIbcPrice): EncodeObject => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgSendIbcPrice", value: data }),
    msgCreatePrice: (data: MsgCreatePrice): EncodeObject => ({ typeUrl: "/jboetticher.simpleclcosmos.clprice.MsgCreatePrice", value: data }),
    
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
