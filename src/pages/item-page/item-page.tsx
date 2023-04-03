import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { store } from '../../store/store';
import { useAppSelector } from '../../hooks/use-app-selector';
import {
  fetchReviewsAction,
  fetchSelectedCameraAction,
  fetchSimilarItemsAction,
} from '../../store/item-state/api-actions';
import {
  getSelectedCamera,
  getSelectedCameraLoadingStatus,
  getSelectedCameraLoadingError,
  getSimilarItems,
  getSimilarItemsLoadingStatus,
  getReviews,
  getReviewsLoadingStatus,
  getAddedReview,
} from '../../store/item-state/selectors';
import {
  getSortedReviews,
  scrollToTop
} from '../../utils';
import { AppRoute } from '../../const';
import NotFoundPage from '../not-found-page/not-found-page';
import Icons from '../../components/icons/icons';
import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import SelectedCamera from '../../components/selected-camera/selected-camera';
import SimilarItems from '../../components/similar-items/similar-items';
import Reviews from '../../components/reviews/reviews';
import Modal from '../../components/modal/modal';
import ReviewForm from '../../components/review-form/review-form';
import ReviewSuccess from '../../components/review-success/review-success';
import Footer from '../../components/footer/footer';
import Loader from '../../components/loader/loader';

function ItemPage(): JSX.Element {
  const { id } = useParams();
  const itemID = Number(id);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      store.dispatch(fetchSelectedCameraAction(itemID));
      store.dispatch(fetchSimilarItemsAction(itemID));
      store.dispatch(fetchReviewsAction(itemID));
      scrollToTop(window);
    }
    return () => {
      isMounted = false;
    };
  }, [itemID]);
  const isSelectedItemLoading = useAppSelector(getSelectedCameraLoadingStatus);
  const selectedItem = useAppSelector(getSelectedCamera);
  const areSimilarItemsLoading = useAppSelector(getSimilarItemsLoadingStatus);
  const similarItems = useAppSelector(getSimilarItems);
  const areReviewsLoading = useAppSelector(getReviewsLoadingStatus);
  const reviews = useAppSelector(getReviews);
  const sortedReviews = getSortedReviews(reviews);
  const addedReview = useAppSelector(getAddedReview);
  const hasSelectedCameraLoadingError = useAppSelector(getSelectedCameraLoadingError);
  const [isModalWindowOpened, setModalWindowOpened] = useState(false);
  const handleModalReviewSuccessClose = () => {
    store.dispatch(fetchReviewsAction(itemID));
    setModalWindowOpened(false);
  };
  const handleArrowUpButtonClick = () => {
    scrollToTop(window);
  };
  if (hasSelectedCameraLoadingError) {
    return <NotFoundPage />;
  }
  return (
    <>
      <Helmet>
        <title>{selectedItem && selectedItem.name}</title>
      </Helmet>
      <Icons />
      <div className="wrapper">
        <Header />
        <main>
          <div className="page-content">
            {selectedItem && (
              <Breadcrumbs page={AppRoute.Item} itemTitle={selectedItem.name} />
            )}
            <div className="page-content__section">
              {isSelectedItemLoading ? (
                <Loader />
              ) : (
                selectedItem && <SelectedCamera camera={selectedItem} />
              )}
            </div>
            <div className="page-content__section">
              {areSimilarItemsLoading ? (
                <Loader />
              ) : (
                selectedItem &&
                similarItems && <SimilarItems cameras={similarItems} />
              )}
            </div>
            <div className="page-content__section">
              {areReviewsLoading ? (
                <Loader />
              ) : (
                selectedItem &&
                reviews && (
                  <Reviews
                    reviews={sortedReviews}
                    openModalWindow={setModalWindowOpened}
                  />
                )
              )}
            </div>
          </div>
          <button
            className="up-btn"
            onClick={handleArrowUpButtonClick}
          >
            <svg width="12" height="18" aria-hidden="true">
              <use xlinkHref="#icon-arrow2"></use>
            </svg>
          </button>
          {
            isModalWindowOpened &&
            (
              addedReview === null ? (
                <Modal
                  openModalWindow={setModalWindowOpened}
                  title="Оставить отзыв"
                >
                  <ReviewForm itemID={itemID} />
                </Modal>
              ) :
                (

                  <Modal
                    openModalWindow={handleModalReviewSuccessClose}
                    title="Спасибо за отзыв"
                  >
                    <ReviewSuccess
                      onContinueButtonClick={handleModalReviewSuccessClose}
                    />
                  </Modal>
                )
            )
          }
        </main>
        <Footer />
      </div>
    </>
  );
}
export default ItemPage;
