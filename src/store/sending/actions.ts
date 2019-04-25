import { IMessage } from './reducer';
import { Action } from 'redux';

export enum SendingActionConstants {
  SEND,
  SENDING_REQUEST_FAILED
}

export interface ISendMessage extends Action {
  readonly type: typeof SendingActionConstants.SEND;
  readonly payload: { message: IMessage };
}

export interface ISendingRequestFailed extends Action {
  readonly type: typeof SendingActionConstants.SENDING_REQUEST_FAILED;
  readonly payload: { error: string };
}

export const sendMessage = (payload: {message: IMessage}): ISendMessage => ({
  type: SendingActionConstants.SEND,
  payload
});

export const sendingRequestFailed = (payload: { error: string}): ISendingRequestFailed => ({
  type: SendingActionConstants.SENDING_REQUEST_FAILED,
  payload
});

export type SendingActionTypes = ISendMessage | ISendingRequestFailed;
