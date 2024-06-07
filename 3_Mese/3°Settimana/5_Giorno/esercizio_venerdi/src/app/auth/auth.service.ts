import { Injectable } from '@angular/core';
import { iAuth } from '../modules/i-auth';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { iUser } from '../modules/i-user';
import { iAuthData } from '../modules/i-auth-data';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();

  authSubject = new BehaviorSubject<null | iUser>(null);

  syncIsLoggedIn: boolean = false;

  user$ = this.authSubject.asObservable();

  isLoggedIn$ = this.user$.pipe(
    map((user) => !!user),
    tap((user) => (this.syncIsLoggedIn = user))
  );

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUser();
  }

  URL_resgister = 'http://localhost:3000/register';
  URL_login = 'http://localhost:3000/login';

  register(newUser: Partial<iUser>): Observable<iAuth> {
    return this.http.post<iAuth>(this.URL_resgister, newUser).pipe(
      tap((data) => {
        this.router.navigate(['/auth/login']);
      })
    );
  }

  login(authData: Partial<iUser>): Observable<iAuth> {
    return this.http.post<iAuth>(this.URL_login, authData).pipe(
      tap((data) => {
        console.log(data);
        this.authSubject.next(data.user);
        console.log(this.user$);
        localStorage.setItem('accessData', JSON.stringify(data));
        this.router.navigate(['/film']);
      })
    );
  }

  logout(): void {
    this.authSubject.next(null);
    localStorage.removeItem('accessData');

    this.router.navigate(['/auth/login']);
  }

  getAccessData(): iAuth | null {
    const accessDataJson = localStorage.getItem('accessData');
    if (!accessDataJson) return null;

    const accessData: iAuth = JSON.parse(accessDataJson);

    return accessData;
  }

  autoLogout(): void {
    const accessData = this.getAccessData();

    if (!accessData) return;
    const expDate = this.jwtHelper.getTokenExpirationDate(
      accessData.accessToken
    ) as Date;

    const expMs = expDate.getTime() - new Date().getTime();

    setTimeout(this.logout, expMs);
  }

  restoreUser(): void {
    const accessData = this.getAccessData();

    if (!accessData) return;

    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return;

    this.authSubject.next(accessData.user);
    this.autoLogout();
  }
}
