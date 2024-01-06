export interface IWalletInfo {
    address: string; 
    bnb: number;
}

export interface IRate {
    t1Rate: number; 
    bnbRate: number;
}

export enum TOKEN {
    BNB = 'BNB', 
    T1 = 'T1'
}

export interface IPackage {
    key: string; 
    name: string; 
    amount: number;
    icon: string; 
    bg: string;
    token: TOKEN;
}
