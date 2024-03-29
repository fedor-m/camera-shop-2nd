export enum AppRoute {
  Catalogue = '/',
  Item = '/item',
  Basket = '/basket',
  NotFound = '*',
}
export enum APIRoute {
  Cameras = '/cameras',
  Promo = '/promo',
  Similar = '/similar',
  Reviews = '/reviews',
  Coupons = '/coupons',
  Orders = '/orders',
}
export enum NameSpace {
  Cameras = 'CAMERAS',
  Promo = 'PROMO',
  Item = 'ITEM'
}
export enum Tab {
  Characteristics = 'characteristics',
  Description = 'description'
}
export enum Field {
  Rating = 'rating',
  UserName = 'userName',
  Advantage = 'advantage',
  Disadvantage = 'disadvantage',
  Review = 'review'
}
export enum CameraCategory {
  Photocamera = 'Фотоаппарат',
  Videocamera = 'Видеокамера'
}
export enum CameraType {
  Digital = 'Цифровая',
  Film = 'Плёночная',
  Snapshot = 'Моментальная',
  Collection = 'Коллекционная'
}
export enum SortParameter {
  Rating = 'rating',
  Price = 'price'
}
export enum OrderParameter {
  Asc = 'asc',
  Desc = 'desc'
}
export enum QueryParameter {
  Page = 'page',
  Sort = 'sort',
  Order = 'order',
  PriceGte = 'price_gte',
  PriceLte = 'price_lte',
  Category = 'category',
  Type = 'type',
  Level = 'level',
  Empty = '?&',
  First = '?'
}
export enum CameraLevel {
  Zero = 'Нулевой',
  NonProfessional = 'Любительский',
  Professional = 'Профессиональный'
}
export enum KeyCode {
  Escape = 'Escape',
  Esc = 'Esc',
  Enter = 'Enter',
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown'
}
export enum Rating {
  Min = 1,
  Max = 5
}
export enum PageSetting {
  CardsNumber = 9,
  SlidesNumber = 3,
  ReviewsNumber = 3,
  MinReviewLength = 5,
  MaxResultsListLength = 4,
  Step = 1
}
export enum PageNumber {
  First = 1,
  Second = 2
}
export enum DateTime {
  FormatBasic = 'YYYY-MM-DD',
  Locale = 'ru',
  FormatRu = 'D MMMM'
}
export const CATEGORIES = Object.freeze(
  [
    {
      key: 'photocamera',
      text: 'Фотокамера',
      value: 'Фотоаппарат'
    },
    {
      key: 'videocamera',
      text: 'Видеокамера',
      value: 'Видеокамера'
    }
  ]
);
export const LEVELS = Object.freeze([
  {
    key: 'zero',
    value: 'Нулевой'
  },
  {
    key: 'non-professional',
    value: 'Любительский'
  },
  {
    key: 'professional',
    value: 'Профессиональный'
  }
]);
export const FIRST_PAGE_DATA = {
  start: 0,
  end: PageSetting.CardsNumber
};
export const RATINGS = Object.freeze(
  [
    {
      mark: 5,
      text:'Отлично'
    },
    {
      mark: 4,
      text:'Хорошо'
    },
    {
      mark: 3,
      text:'Нормально'
    },
    {
      mark: 2,
      text:'Плохо'
    },
    {
      mark: 1,
      text:'Ужасно'
    }
  ]
);
export const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy/';
export const REQUEST_TIMEOUT = 5000;
