import { txClient, queryClient } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { ClpricePacketData } from "./module/types/clprice/packet";
import { NoData } from "./module/types/clprice/packet";
import { IbcPricePacketData } from "./module/types/clprice/packet";
import { IbcPricePacketAck } from "./module/types/clprice/packet";
import { SentPrice } from "./module/types/clprice/sentPrice";
import { Price } from "./module/types/clprice/price";
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        SentPrice: {},
        SentPriceAll: {},
        Price: {},
        PriceAll: {},
        _Structure: {
            ClpricePacketData: getStructure(ClpricePacketData.fromPartial({})),
            NoData: getStructure(NoData.fromPartial({})),
            IbcPricePacketData: getStructure(IbcPricePacketData.fromPartial({})),
            IbcPricePacketAck: getStructure(IbcPricePacketAck.fromPartial({})),
            SentPrice: getStructure(SentPrice.fromPartial({})),
            Price: getStructure(Price.fromPartial({})),
        },
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(subscription);
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(subscription);
        }
    },
    getters: {
        getSentPrice: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.SentPrice[JSON.stringify(params)] ?? {};
        },
        getSentPriceAll: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.SentPriceAll[JSON.stringify(params)] ?? {};
        },
        getPrice: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Price[JSON.stringify(params)] ?? {};
        },
        getPriceAll: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.PriceAll[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('init');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach((subscription) => {
                dispatch(subscription.action, subscription.payload);
            });
        },
        async QuerySentPrice({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).querySentPrice(key.id, query)).data : (await (await initQueryClient(rootGetters)).querySentPrice(key.id)).data;
                commit('QUERY', { query: 'SentPrice', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QuerySentPrice', payload: { options: { all }, params: { ...key }, query } });
                return getters['getSentPrice']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QuerySentPrice', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QuerySentPriceAll({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).querySentPriceAll(query)).data : (await (await initQueryClient(rootGetters)).querySentPriceAll()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).querySentPriceAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'SentPriceAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QuerySentPriceAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getSentPriceAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QuerySentPriceAll', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryPrice({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryPrice(key.id, query)).data : (await (await initQueryClient(rootGetters)).queryPrice(key.id)).data;
                commit('QUERY', { query: 'Price', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryPrice', payload: { options: { all }, params: { ...key }, query } });
                return getters['getPrice']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryPrice', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryPriceAll({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryPriceAll(query)).data : (await (await initQueryClient(rootGetters)).queryPriceAll()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryPriceAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'PriceAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryPriceAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getPriceAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryPriceAll', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async sendMsgDeletePrice({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeletePrice(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeletePrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeletePrice:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgCreatePrice({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreatePrice(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreatePrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreatePrice:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgUpdateSentPrice({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateSentPrice(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateSentPrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateSentPrice:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgUpdatePrice({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdatePrice(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdatePrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdatePrice:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgDeleteSentPrice({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteSentPrice(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteSentPrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteSentPrice:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgSendIbcPrice({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgSendIbcPrice(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgSendIbcPrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSendIbcPrice:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgCreateSentPrice({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateSentPrice(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateSentPrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateSentPrice:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async MsgDeletePrice({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeletePrice(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeletePrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeletePrice:Create', 'Could not create message.');
                }
            }
        },
        async MsgCreatePrice({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreatePrice(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreatePrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreatePrice:Create', 'Could not create message.');
                }
            }
        },
        async MsgUpdateSentPrice({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateSentPrice(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateSentPrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateSentPrice:Create', 'Could not create message.');
                }
            }
        },
        async MsgUpdatePrice({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdatePrice(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdatePrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdatePrice:Create', 'Could not create message.');
                }
            }
        },
        async MsgDeleteSentPrice({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteSentPrice(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteSentPrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteSentPrice:Create', 'Could not create message.');
                }
            }
        },
        async MsgSendIbcPrice({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgSendIbcPrice(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgSendIbcPrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSendIbcPrice:Create', 'Could not create message.');
                }
            }
        },
        async MsgCreateSentPrice({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateSentPrice(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateSentPrice:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateSentPrice:Create', 'Could not create message.');
                }
            }
        },
    }
};
