import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from 'react-testing-library';
import { Provider } from 'react-redux';
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
    getByTestId('App');
  });
});

describe('Send Message Button', () => {
  it('Should add a message when clicked', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(getByTestId('SendMessageButton'));
    waitForElement(() => getByTestId("Message0"))
  });
});
