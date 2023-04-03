import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../../components/history-router/history-router';
import { createMemoryHistory } from 'history';
import { makeFakeCamera } from '../../mocks/mocks';
import { datatype } from 'faker';
import Card from './card';

const fakeCamera = makeFakeCamera();
const isActive = datatype.boolean();

describe('Component: Card', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <Card
            camera={fakeCamera}
            isActive={isActive}
          />
        </HistoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText(fakeCamera.name)).toBeInTheDocument();
    expect(screen.getByText(fakeCamera.reviewCount)).toBeInTheDocument();
    expect(screen.getByText(`${fakeCamera.price} ₽`)).toBeInTheDocument();
    expect(screen.getByText('Подробнее')).toBeInTheDocument();
  });
});

