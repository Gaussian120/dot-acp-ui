import { ApiPromise } from "@polkadot/api";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { ActionType } from "../../app/types/enum";
import { TokenBalanceData } from "../../app/types";

export interface WalletState {
  api: ApiPromise | null;
  accounts: InjectedAccountWithMeta[];
  selectedAccount: InjectedAccountWithMeta | null;
  tokenBalances: TokenBalanceData | null;
  walletConnectLoading: boolean;
}

export type WalletAction =
  | { type: ActionType.SET_API; payload: ApiPromise }
  | { type: ActionType.SET_ACCOUNTS; payload: InjectedAccountWithMeta[] }
  | { type: ActionType.SET_SELECTED_ACCOUNT; payload: InjectedAccountWithMeta }
  | { type: ActionType.SET_TOKEN_BALANCES; payload: TokenBalanceData }
  | { type: ActionType.SET_WALLET_CONNECT_LOADING; payload: boolean };
