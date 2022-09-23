
import { User } from '../../models/user.model';

import { ActionEnum } from './action.enums';

export interface SyncData {
  type: ActionEnum.SYNC_DATA;
  data: User[];
}

export interface SelectUser {
  type: ActionEnum.SELECT_USER;
  data: User;
}

export interface SetSearch {
  type: ActionEnum.SET_SEARCH;
  search: string;
}

export type UsersActionType = 
  | SyncData
  | SelectUser
  | SetSearch