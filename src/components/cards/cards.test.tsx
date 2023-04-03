import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../../components/history-router/history-router';
import { createMemoryHistory } from 'history';
import { makeFakeCameras } from '../../mocks/mocks';
import Cards from './cards';

const fakeCameras = makeFakeCameras();

describe('Component: Cards', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <Cards
            cameras={fakeCameras}
          />
        </HistoryRouter>
      </HelmetProvider>
    );
    fakeCameras.forEach((camera) => {
      expect(screen.getAllByText(camera.name)[0]).toBeInTheDocument();
      expect(screen.getAllByText(camera.reviewCount)[0]).toBeInTheDocument();
    });

  });
});

