import React from 'react';
import {
  render,
  cleanup,
} from 'react-testing-library';
import { Provider } from 'react-redux';
// import 'jest-dom/extend-expect';
import App from './index';
import { store } from '../../store/store';

afterEach(cleanup);

describe('App Component', () => {
  it('Renders with data-testid "App"', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    getByTestId("App")
  });
});