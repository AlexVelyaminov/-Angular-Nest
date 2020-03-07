// ngrx
import {
  createAction,
  props
} from '@ngrx/store';
// interfaces and data-transfer-object
import {IUser} from "../../../../../server/src/modules/user/interfaces/user.interface";
import {UserDto} from "../../../../../server/src/modules/user/data-transfer-object/user.dto";
import {Action} from "rxjs/internal/scheduler/Action";

export enum EUsersActions {
  LoadAllUsers = '[Users] Load all users',
  GetUserById = '[Users] Get user by id',
  CreateUser = '[Users] Create user',
  UpdateUser = '[Users] Update user',
  RemoveUser = '[Users] Remove user'
}

export class LoadAllUsers implements Action<any> {
  readonly type = EUsersActions.LoadAllUsers;

  constructor() {}
}


