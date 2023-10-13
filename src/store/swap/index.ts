import { SwapAction, SwapState } from "./interface";
import { ActionType } from "../../app/types/enum";

export const initialSwapState: SwapState = {
  swapFinalized: false,
  swapGasFeesMessage: "",
  swapGasFee: "",
  swapLoading: false,
  swapExactInTokenAmount: 0,
  swapExactOutTokenAmount: 0,
};

export const swapReducer = (state: SwapState, action: SwapAction): SwapState => {
  switch (action.type) {
    case ActionType.SET_SWAP_FINALIZED:
      return { ...state, swapFinalized: action.payload };
    case ActionType.SET_SWAP_GAS_FEES_MESSAGE:
      return { ...state, swapGasFeesMessage: action.payload };
    case ActionType.SET_SWAP_GAS_FEE:
      return { ...state, swapGasFee: action.payload };
    case ActionType.SET_SWAP_LOADING:
      return { ...state, swapLoading: action.payload };
    case ActionType.SET_SWAP_EXACT_IN_TOKEN_AMOUNT:
      return { ...state, swapExactInTokenAmount: action.payload };
    case ActionType.SET_SWAP_EXACT_OUT_TOKEN_AMOUNT:
      return { ...state, swapExactOutTokenAmount: action.payload };
    default:
      return state;
  }
};
