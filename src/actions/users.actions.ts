import { User } from '../models/user.model';
import store from '../store/store';
import { reduxSyncData } from '../store/usersReducer/action.creator';
import * as api from './users.handler';

export const getUsers = async (): Promise<void> => {
  const result = await api.getUsers();
  store.dispatch(reduxSyncData(result || []))
};


export const updateUser = async (id:string, update: Partial<User>): Promise<void> => {
//TODO
const result = await api.updateUser(id, update);
console.log(result);
}

export const deleteUser = async (id: string): Promise<void> => {
//TODO

}

export const addUser = async (add: Partial<User>): Promise<void> => {
  //TODO
  const result = await api.addUser(add);
  }
