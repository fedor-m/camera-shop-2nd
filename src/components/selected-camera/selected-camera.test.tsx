import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../../components/history-router/history-router';
import { createMemoryHistory } from 'history';
import { makeFakeCamera } from '../../mocks/mocks';
import SelectedCamera from './selected-camera';

const fakeCamera = makeFakeCamera();

describe('Component: Card', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <SelectedCamera camera={fakeCamera} />
        </HistoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText(fakeCamera.name)).toBeInTheDocument();
    expect(screen.getByText(fakeCamera.reviewCount)).toBeInTheDocument();
    expect(screen.getByText(`${fakeCamera.price} ₽`)).toBeInTheDocument();
    expect(screen.getByText(fakeCamera.description)).toBeInTheDocument();
    expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
  });
});

