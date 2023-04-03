import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type BreadcrumbsProps = {
  page: string;
  itemTitle?: string;
};

function Breadcrumbs({ page, itemTitle }: BreadcrumbsProps): JSX.Element {
  const iconArrowMini = (
    <svg
      width="5"
      height="8"
      aria-hidden="true"
    >
      <use xlinkHref="#icon-arrow-mini" />
    </svg>
  );
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a
              className="breadcrumbs__link"
              {...(page === AppRoute.Catalogue ? {} : { href: AppRoute.Catalogue })}
            >
              Главная
              {iconArrowMini}
            </a>
          </li>
          <li className="breadcrumbs__item">
            {
              page === AppRoute.Catalogue
                ?
                <span className="breadcrumbs__link breadcrumbs__link--active">Каталог</span>
                :
                <Link className="breadcrumbs__link" to={AppRoute.Catalogue}>Каталог
                  {iconArrowMini}
                </Link>
            }
          </li>
          {
            page === AppRoute.Basket &&
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link breadcrumbs__link--active">
                Корзина
              </span>
            </li>
          }
          {
            page === AppRoute.Item &&
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link breadcrumbs__link--active">
                {itemTitle}
              </span>
            </li>
          }
        </ul>
      </div>
    </div>
  );
}
export default Breadcrumbs;
