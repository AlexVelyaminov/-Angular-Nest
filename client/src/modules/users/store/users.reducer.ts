import {Action, createReducer, on, State} from '@ngrx/store';
// initial state
import {initialUsersState} from './users.state';
import {
  getUserById,
  createUser,
  updateUser,
  removeUser
} from "./users.actions";
import {IUser} from "../../../../../server/src/modules/user/interfaces/user.interface";



const _usersReducer = createReducer(
  initialUsersState,
  // on(getAllUsers, (state, {users}) => ({
  //   ...state,
  //   users
  // })),
  on(getUserById, (state, {id}) => ({
    ...state,
    user: state[id]
  })),
  on(createUser, (state, {user}) => ({
    ...state,
    user: user
  })),
  on(updateUser, (state, {id, user}) => ({
    ...state,
    user: user,
    id: id
  })),
  on(removeUser, state => state)
);

export function usersReducer(state: IUser[] | undefined, action: Action) {
  return _usersReducer(state, action);
}
