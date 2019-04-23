import React from 'react';
import { IRootstate } from '../../store/store';
import { IMessage } from '../../store/sending/reducer';
import { connect } from 'react-redux';

interface IStateProps {
  messages: IMessage[]
}


const mapStateToProps = (state: IRootstate): IStateProps => ({
    messages: state.sending.messages
})

const App = ({messages}: IStateProps) => {
  return (
    <div data-testid="App" onClick={() => console.log(messages)}  className="App">Click me to log messages</div>
  );
};

export default connect(mapStateToProps, null)(App);
