import {createSelector} from '@ngrx/store'
import {IState} from "./users.state";
import {IUser} from "../../../../../server/src/modules/user/interfaces/user.interface";

const selectUsers = (state: IState) => state.users as IUser[];

export const selectUsersList = createSelector(
  selectUsers,
  (users: IUser[])
)
