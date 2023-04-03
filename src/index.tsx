import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browser-history';
import { store } from './store/store';
import { fetchPromoAction } from './store/promo-state/api-actions';
import App from './components/app/app';

store.dispatch(fetchPromoAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
