import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../../components/history-router/history-router';
import { createMemoryHistory } from 'history';
import { makeFakeSimilarCameras } from '../../mocks/mocks';
import SimilarItems from './similar-items';

const fakeSimilarCameras = makeFakeSimilarCameras();

describe('Component: SimilarItems', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <SimilarItems
            cameras={fakeSimilarCameras}
          />
        </HistoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText('Похожие товары')).toBeInTheDocument();
    fakeSimilarCameras.forEach((camera) => {
      expect(screen.getAllByText(camera.name)[0]).toBeInTheDocument();
      expect(screen.getAllByText(camera.reviewCount)[0]).toBeInTheDocument();
      expect(screen.getAllByText(`${camera.price} ₽`)[0]).toBeInTheDocument();
    });

  });
});

