import { applyMiddleware, createStore, combineReducers } from 'redux';
import { SendingReducer, ISendingState } from './sending/reducer';

export interface IRootstate {
  sending: ISendingState;
}

export const store = createStore(
  combineReducers<IRootstate>({
    sending: SendingReducer
  })
);
