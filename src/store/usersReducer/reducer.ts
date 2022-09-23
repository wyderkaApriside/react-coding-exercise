
import { ActionEnum } from './action.enums';
import { UsersActionType } from './action.types';
import { initialState, UsersState } from './state.model';


const reducer = (state: UsersState = initialState, action: UsersActionType
): UsersState => {
  switch (action.type) {
    case ActionEnum.SYNC_DATA:
      return { ...state, users: action.data };
    //
    case ActionEnum.SELECT_USER:
      return { ...state, selectedUser: action.data };
    //
    case ActionEnum.SET_SEARCH:
      return { ...state, search: action.search };
    //
    default:
      return state;
  }
};

export default reducer;