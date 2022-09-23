
import { User } from '../../models/user.model';
import { ActionEnum } from './action.enums';
import * as ActionTypes from './action.types';


export const reduxSyncData = (data: User[]): ActionTypes.SyncData => {
  return {
    type: ActionEnum.SYNC_DATA,
    data
  };
};

export const reduxSelectUser = (data: User): ActionTypes.SelectUser => {
  return {
    type: ActionEnum.SELECT_USER,
    data
  };
};

export const reduxSetSearch = (search: string): ActionTypes.SetSearch => {
  return {
    type: ActionEnum.SET_SEARCH,
    search
  };
};