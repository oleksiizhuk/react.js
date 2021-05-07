import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import i18n from '../../src/i18n';
import reduxStore from '../../src/components/store/configureStore';

function render(
  ui,
  {
    initialState,
    store = reduxStore,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    const history = createBrowserHistory();
    return (
      <Provider store={store}>
        <Router history={history}>
          <I18nextProvider i18n={i18n}>
            {children}
          </I18nextProvider>
        </Router>
      </Provider>
    );
  }
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    store
  };
}

export * from '@testing-library/react';

export { render };
