export type AddressType = {
    97: string;
    56: string;
}

export enum CHAIN_ID {
    TESTNET = 97,
    MAINNET = 56
}

export default function getChainIdFromEnv(): number {
    const env = process.env.NEXT_PUBLIC_CHAIN_ID
    if(!env) {return 97}
    return parseInt(env)
}

export const getRPC = () => {
    if(getChainIdFromEnv() === CHAIN_ID.MAINNET)
        return process.env.NEXT_PUBLIC_RPC_MAINNET
    return process.env.NEXT_PUBLIC_RPC_TESTNET
}

export const SMART_ADDRESS = {
    CROWD_SALE: {97: '0x3e83E232775f642B34FF876260846040480ACCF4', 56: ''},
    T1: {97: '0x8791AB2f281C05d664F0117f7dC9aC501C3c79a4', 56: ''}
}