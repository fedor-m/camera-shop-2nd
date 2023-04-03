import dayjs from 'dayjs';
import { Pages } from './types/pages';
import { Stars } from './types/stars';
import { Review } from './types/review';
import {
  PageNumber,
  PageSetting,
  DateTime,
  Rating,
  KeyCode,
  CameraCategory,
  CameraType,
  CameraLevel
} from './const';
export const getPageNumber = (page: number) =>
  (Number(page) > 0) ? Number(page) : PageNumber.First;
export const getPagesNumber = (camerasLength: number) =>
  camerasLength % PageSetting.CardsNumber === 0
    ? camerasLength / PageSetting.CardsNumber
    : Number((camerasLength / PageSetting.CardsNumber).toFixed(0)) + 1;
export const getItemNumbersToPage = (page: number, total: number): Pages => ({
  start: PageSetting.CardsNumber * (page - 1),
  end: PageSetting.CardsNumber * page > total ? total : PageSetting.CardsNumber * page
});
export const getStarsInRating = (rating: number): Stars => ({
  gold: [...Array.from({ length: rating }).keys()],
  grey: [...Array.from({ length: Rating.Max - rating }).keys()],
});
export const getDateFormatBasic = (date: string): string =>
  dayjs(date).format(DateTime.FormatBasic);
export const getDateFormatRU = (date: string): string => {
  require('dayjs/locale/ru');
  return dayjs(date).locale(DateTime.Locale).format(DateTime.FormatRu);
};
export const getSortedReviews = (reviews: Review[] | null): Review[] | null => {
  if (!reviews) {
    return null;
  }
  return [...reviews].sort((a, b) =>
    dayjs(a.createAt).isBefore(dayjs(b.createAt)) ? 1 : -1
  );
};
export const isEscKey = (key: string) =>
  key === KeyCode.Escape || key === KeyCode.Esc;
export const isEnterKey = (key:string) =>
  key === KeyCode.Enter;
export const isArrowDownKey = (key: string) =>
  key === KeyCode.ArrowDown;
export const isArrowUpKey = (key: string) =>
  key === KeyCode.ArrowUp;
export const scrollToTop = (element: HTMLElement | Window) => {
  element.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
export const checkFiltersInQuery = (
  url: string,
  category?: string|null,
  types?: string[]|null,
  levels?:string[]|null
) =>
{
  if(category)
  {
    const isCategoryValueCorrect = () =>
      String(category) === CameraCategory.Photocamera || String(category) === CameraCategory.Videocamera;
    isCategoryValueCorrect() ? url += `&category=${category}` : url += '';
  }
  if(types)
  {
    const filterTypes = types.filter((type) => Object.values(CameraType).includes(type as CameraType));
    filterTypes.length > 0 ?
      filterTypes.forEach((type)=>
      {
        url += `&type=${String(type)}`;
      })
      :
      url += '';
  }
  if(levels)
  {
    const filterLevels = levels?.filter((level) => Object.values(CameraLevel).includes(level as CameraLevel));
    filterLevels.length > 0 ?
      filterLevels.forEach((level)=>
      {
        url += `&level=${String(level)}`;
      })
      :
      url += '';
  }
  return url;
};
