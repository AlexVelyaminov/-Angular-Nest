import {IUser} from "../../../../../server/src/modules/user/interfaces/user.interface";

export interface IUsersState {
  loading: boolean,
  loaded: boolean,
  users: IUser[]
}

export const initialUsersState = (): IUsersState => {
  return ({
    users: [],
    loading: false,
    loaded: true
  })
}
