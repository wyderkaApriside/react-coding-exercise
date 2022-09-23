import { User } from "../../models/user.model";

export interface UsersState  {
  users: User[];
  selectedUser: User | null;
  search: string;
}

export const initialState: UsersState = {
  users: [],
  selectedUser: null,
  search: ''
}