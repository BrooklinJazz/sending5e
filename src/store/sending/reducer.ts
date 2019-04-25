import { Reducer } from "redux";
import { SendingActionTypes, SendingActionConstants } from "./actions";
export interface IMessage {
    to: string;
    content: string;
}

export interface ISendingState {
    messages: IMessage[]
}

export const initialState: ISendingState = {
    messages: []
}

export const SendingReducer: Reducer<ISendingState, SendingActionTypes> = (
    state: ISendingState = initialState,
    action: SendingActionTypes
  ) => {
    switch (action.type) {
      case SendingActionConstants.SEND:
        return {
            ...state,
            messages: [...state.messages, action.payload.message]
        }
      case SendingActionConstants.SENDING_REQUEST_FAILED:
        return {
          ...state,
        }
      default:
        return state
    }
  }