import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../../components/history-router/history-router';
import { createMemoryHistory } from 'history';
import {
  internet,
  commerce
} from 'faker';
import { AppRoute } from '../../const';
import Breadcrumbs from './breadcrumbs';

const fakeUrl = internet.url();
describe('Component: Breadcrumbs', () => {
  it('should render correctly without item title', () => {
    const history = createMemoryHistory();
    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <Breadcrumbs page={fakeUrl} />
        </HistoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText('Главная')).toBeInTheDocument();
    expect(screen.getByText('Каталог')).toBeInTheDocument();
  });
  it('should render correctly with item title', () => {
    const history = createMemoryHistory();
    const itemTitle = commerce.productName();
    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <Breadcrumbs
            page={AppRoute.Item}
            itemTitle={itemTitle}
          />
        </HistoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText('Главная')).toBeInTheDocument();
    expect(screen.getByText('Каталог')).toBeInTheDocument();
    expect(screen.getByText(itemTitle)).toBeInTheDocument();
  });
});

