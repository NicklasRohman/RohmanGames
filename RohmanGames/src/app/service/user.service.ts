import { Injectable } from '@angular/core';
import { UserModule } from '../model/user/user.module';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = `https://localhost:44393/api/user/`;

  constructor(private httpClient: HttpClient) {}

  public getUserById(userId: string): Observable<UserModule | null> {
    return this.httpClient
      .get<UserModule>(`${this.baseUrl}GetUserById`, {
        params: {
          id: userId,
        },
      })
      .pipe(
        map((response: UserModule) => {
          return response || null;
        })
      );
  }
}
