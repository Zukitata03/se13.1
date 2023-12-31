/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface DHACrowdSaleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BNB_rate"
      | "T1_rate"
      | "_wallet"
      | "buyTokenByBNB"
      | "buyTokenByT1"
      | "getTokenAmountBNB"
      | "getTokenAmountT1"
      | "owner"
      | "renounceOwnership"
      | "setBNBRate"
      | "setT1Rate"
      | "setT1Token"
      | "t1Token"
      | "token"
      | "transferOwnership"
      | "withdraw"
      | "withdrawErc20"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BuyTokenByBNB"
      | "BuyTokenByT1"
      | "OwnershipTransferred"
      | "SetBNBRate"
      | "SetT1Rate"
      | "SetT1Token"
  ): EventFragment;

  encodeFunctionData(functionFragment: "BNB_rate", values?: undefined): string;
  encodeFunctionData(functionFragment: "T1_rate", values?: undefined): string;
  encodeFunctionData(functionFragment: "_wallet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buyTokenByBNB",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyTokenByT1",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAmountBNB",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAmountT1",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBNBRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setT1Rate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setT1Token",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "t1Token", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawErc20",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "BNB_rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "T1_rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_wallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyTokenByBNB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyTokenByT1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAmountBNB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAmountT1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBNBRate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setT1Rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setT1Token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "t1Token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawErc20",
    data: BytesLike
  ): Result;
}

export namespace BuyTokenByBNBEvent {
  export type InputTuple = [buyer: AddressLike, amount: BigNumberish];
  export type OutputTuple = [buyer: string, amount: bigint];
  export interface OutputObject {
    buyer: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BuyTokenByT1Event {
  export type InputTuple = [buyer: AddressLike, amount: BigNumberish];
  export type OutputTuple = [buyer: string, amount: bigint];
  export interface OutputObject {
    buyer: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetBNBRateEvent {
  export type InputTuple = [newRate: BigNumberish];
  export type OutputTuple = [newRate: bigint];
  export interface OutputObject {
    newRate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetT1RateEvent {
  export type InputTuple = [newRate: BigNumberish];
  export type OutputTuple = [newRate: bigint];
  export interface OutputObject {
    newRate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetT1TokenEvent {
  export type InputTuple = [tokenAddress: AddressLike];
  export type OutputTuple = [tokenAddress: string];
  export interface OutputObject {
    tokenAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DHACrowdSale extends BaseContract {
  connect(runner?: ContractRunner | null): DHACrowdSale;
  waitForDeployment(): Promise<this>;

  interface: DHACrowdSaleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  BNB_rate: TypedContractMethod<[], [bigint], "view">;

  T1_rate: TypedContractMethod<[], [bigint], "view">;

  _wallet: TypedContractMethod<[], [string], "view">;

  buyTokenByBNB: TypedContractMethod<[], [void], "payable">;

  buyTokenByT1: TypedContractMethod<
    [T1Amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getTokenAmountBNB: TypedContractMethod<
    [BNBAmount: BigNumberish],
    [bigint],
    "view"
  >;

  getTokenAmountT1: TypedContractMethod<
    [T1Amount: BigNumberish],
    [bigint],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setBNBRate: TypedContractMethod<
    [new_rate: BigNumberish],
    [void],
    "nonpayable"
  >;

  setT1Rate: TypedContractMethod<
    [new_rate: BigNumberish],
    [void],
    "nonpayable"
  >;

  setT1Token: TypedContractMethod<
    [token_address: AddressLike],
    [void],
    "nonpayable"
  >;

  t1Token: TypedContractMethod<[], [string], "view">;

  token: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<[], [void], "nonpayable">;

  withdrawErc20: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BNB_rate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "T1_rate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_wallet"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "buyTokenByBNB"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "buyTokenByT1"
  ): TypedContractMethod<[T1Amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getTokenAmountBNB"
  ): TypedContractMethod<[BNBAmount: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTokenAmountT1"
  ): TypedContractMethod<[T1Amount: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setBNBRate"
  ): TypedContractMethod<[new_rate: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setT1Rate"
  ): TypedContractMethod<[new_rate: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setT1Token"
  ): TypedContractMethod<[token_address: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "t1Token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawErc20"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "BuyTokenByBNB"
  ): TypedContractEvent<
    BuyTokenByBNBEvent.InputTuple,
    BuyTokenByBNBEvent.OutputTuple,
    BuyTokenByBNBEvent.OutputObject
  >;
  getEvent(
    key: "BuyTokenByT1"
  ): TypedContractEvent<
    BuyTokenByT1Event.InputTuple,
    BuyTokenByT1Event.OutputTuple,
    BuyTokenByT1Event.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "SetBNBRate"
  ): TypedContractEvent<
    SetBNBRateEvent.InputTuple,
    SetBNBRateEvent.OutputTuple,
    SetBNBRateEvent.OutputObject
  >;
  getEvent(
    key: "SetT1Rate"
  ): TypedContractEvent<
    SetT1RateEvent.InputTuple,
    SetT1RateEvent.OutputTuple,
    SetT1RateEvent.OutputObject
  >;
  getEvent(
    key: "SetT1Token"
  ): TypedContractEvent<
    SetT1TokenEvent.InputTuple,
    SetT1TokenEvent.OutputTuple,
    SetT1TokenEvent.OutputObject
  >;

  filters: {
    "BuyTokenByBNB(address,uint256)": TypedContractEvent<
      BuyTokenByBNBEvent.InputTuple,
      BuyTokenByBNBEvent.OutputTuple,
      BuyTokenByBNBEvent.OutputObject
    >;
    BuyTokenByBNB: TypedContractEvent<
      BuyTokenByBNBEvent.InputTuple,
      BuyTokenByBNBEvent.OutputTuple,
      BuyTokenByBNBEvent.OutputObject
    >;

    "BuyTokenByT1(address,uint256)": TypedContractEvent<
      BuyTokenByT1Event.InputTuple,
      BuyTokenByT1Event.OutputTuple,
      BuyTokenByT1Event.OutputObject
    >;
    BuyTokenByT1: TypedContractEvent<
      BuyTokenByT1Event.InputTuple,
      BuyTokenByT1Event.OutputTuple,
      BuyTokenByT1Event.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "SetBNBRate(uint256)": TypedContractEvent<
      SetBNBRateEvent.InputTuple,
      SetBNBRateEvent.OutputTuple,
      SetBNBRateEvent.OutputObject
    >;
    SetBNBRate: TypedContractEvent<
      SetBNBRateEvent.InputTuple,
      SetBNBRateEvent.OutputTuple,
      SetBNBRateEvent.OutputObject
    >;

    "SetT1Rate(uint256)": TypedContractEvent<
      SetT1RateEvent.InputTuple,
      SetT1RateEvent.OutputTuple,
      SetT1RateEvent.OutputObject
    >;
    SetT1Rate: TypedContractEvent<
      SetT1RateEvent.InputTuple,
      SetT1RateEvent.OutputTuple,
      SetT1RateEvent.OutputObject
    >;

    "SetT1Token(address)": TypedContractEvent<
      SetT1TokenEvent.InputTuple,
      SetT1TokenEvent.OutputTuple,
      SetT1TokenEvent.OutputObject
    >;
    SetT1Token: TypedContractEvent<
      SetT1TokenEvent.InputTuple,
      SetT1TokenEvent.OutputTuple,
      SetT1TokenEvent.OutputObject
    >;
  };
}
