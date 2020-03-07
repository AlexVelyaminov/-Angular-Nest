import {UsersApiService} from "../services/users.api.service";
import {Injectable} from "@angular/core";
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {EUsersActions} from "./users.actions";

@Injectable()
export class UsersEffects {

  @Effect()
  public loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(EUsersActions.LoadAllUsers),
    mergeMap(  () => {
      return this.usersApi.getAllUsers().pipe(
        map(users => {
          return ({type: EUsersActions.SuccessfulLoadUsers, users: users})
        }),
        catchError(() => EMPTY)
      )})
  ));

  constructor(
    private actions$: Actions,
    private usersApi: UsersApiService
  ) {
  }
}
