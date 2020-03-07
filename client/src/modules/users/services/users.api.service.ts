// Angular
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
// Rxjs
import {Observable} from "rxjs";
// Interfaces
import {IUser} from "../../../../../server/src/modules/user/interfaces/user.interface";
import {environment} from "../../../environments/environment";
import {UserDto} from "../../../../../server/src/modules/user/data-transfer-object/user.dto";


@Injectable()
export class UsersApiService {

  private readonly baseUrl = 'users';

  private static readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient
  ) {}

  public getAllUsers(): Observable<IUser[]> {
    const url = `${environment.apiUrl}/${this.baseUrl}`;
    return this.http.get(url, UsersApiService.httpOptions) as Observable<IUser[]>;
  }

  public getUserById(id: number): Observable<IUser> {
    const url = `${environment.apiUrl}/${this.baseUrl}/${id}`;
    return this.http.get(url, UsersApiService.httpOptions) as Observable<IUser>;
  }

  public createUser(user: UserDto): Observable<void> {
    const url = `${environment.apiUrl}/${this.baseUrl}`;
    return this.http.post(url, user, UsersApiService.httpOptions) as unknown as Observable<void>;
  }

  public updateUser(id: number, user: UserDto) {
    const url = `${environment.apiUrl}/${this.baseUrl}/${id}`;
    return this.http.patch(url, user, UsersApiService.httpOptions)
  }

  public removeUser(id: number) {
    const url = `${environment.apiUrl}/${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
