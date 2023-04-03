import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Camera } from '../../types/camera';
import { getStarsInRating } from '../../utils';

type CardProps = {
  camera: Camera;
  isActive?: boolean;
};

function Card({ camera, isActive }: CardProps): JSX.Element {
  const {
    id,
    name,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
    rating,
    reviewCount,
    price
  } = camera;
  const stars = getStarsInRating(rating);
  const goldStars = stars.gold.map(
    (star) => (
      <svg
        width="17"
        height="16"
        aria-hidden="true"
        key={`star_${star}`}
      >
        <use xlinkHref="#icon-full-star"></use>
      </svg>
    )
  );
  const greyStars = stars.grey.map(
    (star) => (
      <svg
        width="17"
        height="16"
        aria-hidden="true"
        key={`star_${star}`}
      >
        <use xlinkHref="#icon-star"></use>
      </svg>
    )
  );
  return (
    <div className={`product-card${isActive ? ' is-active' : ''}`}>
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`/${previewImgWebp}, /${previewImgWebp2x}`}
          />
          <img
            src={`/${previewImg}`}
            srcSet={`/${previewImg2x}`}
            width="280"
            height="240"
            alt={camera.name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          {goldStars}
          {greyStars}
          <p className="visually-hidden">{`Рейтинг: ${rating}`}</p>
          <p className="rate__count">
            <span className="visually-hidden">
              Всего оценок:
            </span>
            {reviewCount}
          </p>
        </div>
        <p className="product-card__title">
          {name}
        </p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {`${price.toLocaleString()} ₽`}
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          className="btn btn--purple product-card__btn"
          type="button"
        >
          Купить
        </button>
        <Link className="btn btn--transparent" to={`${AppRoute.Item}/${id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}
export default Card;
