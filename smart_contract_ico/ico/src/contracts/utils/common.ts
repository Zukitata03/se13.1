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
    CROWD_SALE: {97: '0x5D48aF8db6163c447a69cCEAEe363f8E4e011392', 56: ''},
    T1: {97: '0x2308ea0c13dF876cb0Ea71A6ca131626b0F166fD', 56: ''}
}