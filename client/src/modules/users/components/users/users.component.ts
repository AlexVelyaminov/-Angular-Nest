// angular
import {Component, OnInit} from "@angular/core";
import {UsersApiService} from "../../services/users.api.service";
// interfaces and data-transfer-object
import {IUser} from "../../../../../../server/src/modules/user/interfaces/user.interface";
import {UserDto} from "../../../../../../server/src/modules/user/data-transfer-object/user.dto";
// rxjs
import {Observable} from "rxjs";
// ngrx
import {select, Store} from "@ngrx/store";
// ngrx actions
import {
  EUsersActions,
  createUser,
  getUserById,
  removeUser,
  updateUser
} from "../../store/users.actions";
// ngrx state
import {IStore} from "../../store/users.state";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users$: Observable<IUser[]> = this.store.pipe(select(store => store.state.users));

  constructor(
    private usersApi: UsersApiService,
    private store: Store<IStore>
  ) {
  }

  public async ngOnInit(): Promise<void> {
    debugger
    this.store.dispatch({type: EUsersActions.LoadAllUsers});
  }

  public getUserById(id: number): void {
    this.store.dispatch(getUserById({id}));
  }

  public createUser(user: UserDto): void {
    this.store.dispatch(createUser({user}));
  }

  public updateUser(id: number, user: UserDto): void {
    this.store.dispatch(updateUser({id, user}));
  }

  public removeUser(id: number): void {
    this.store.dispatch(removeUser({id}));
  }
}
