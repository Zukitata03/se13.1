import { IWalletInfo } from "@/_types_"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ethers } from "ethers";

export interface AccountState {
  wallet?: IWalletInfo;
  web3Provider?: ethers.providers.Web3Provider;
}

const initialState: AccountState = {}

export const disconnectWallet = createAsyncThunk(
  'account/disconnectWallet',
  async (_, { dispatch }) => {
    dispatch(clearWalletInfo());
  }
);

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setWeb3Provider: (state, action: PayloadAction<ethers.providers.Web3Provider>) => {      
      state.web3Provider = action.payload;
    },
    setWalletInfo: (state, action: PayloadAction<IWalletInfo>) => {
      state.wallet = action.payload;
    },   
    clearWalletInfo: (state) => {
      state.wallet = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(disconnectWallet.fulfilled, (state) => {
      state.wallet = undefined;
    });
  },
});

export const { setWalletInfo, setWeb3Provider, clearWalletInfo } = accountSlice.actions;
export default accountSlice.reducer;

