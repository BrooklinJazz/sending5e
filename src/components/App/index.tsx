import React from 'react';
import { IRootstate } from '../../store/store';
import { IMessage } from '../../store/sending/reducer';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { sendMessage } from '../../store/sending/actions';

interface IStateProps {
  messages: IMessage[];
}

const mapStateToProps = (state: IRootstate): IStateProps => ({
  messages: state.sending.messages
});

interface IDispatchProps {
  sendMessage: typeof sendMessage;
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps =>
  bindActionCreators(
    {
      sendMessage
    },
    dispatch
  );

const message: IMessage = { to: 'test to', content: 'test content' };

interface IProps extends IDispatchProps, IStateProps {}

const App = ({ messages, sendMessage }: IProps) => {
  return (
    <div data-testid="App" className="App">
      <button
        onClick={() => sendMessage({ message })}
        data-testid="SendMessageButton"
      >
        Click me to create a message
      </button>
      <ol>
        {messages.map((message, index) => (
          <li key={index} data-testid={`Message${index}`}>
            to: {message.to} content: {message.content}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
