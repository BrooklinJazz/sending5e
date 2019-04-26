import { applyMiddleware, createStore, combineReducers } from 'redux';
import { SendingReducer, ISendingState } from './sending/reducer';

import logger from 'redux-logger';

export interface IRootstate {
  sending: ISendingState;
}

export const store = createStore(
  combineReducers<IRootstate>({
    sending: SendingReducer
  }),
  applyMiddleware(logger)
);
