import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { camerasState } from './cameras-state/cameras-state';
import { promoState } from './promo-state/promo-state';
import { itemState } from './item-state/item-state';

export const rootReducer = combineReducers({
  [NameSpace.Cameras]: camerasState.reducer,
  [NameSpace.Promo]: promoState.reducer,
  [NameSpace.Item]: itemState.reducer
});
