import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iFilm } from './modules/i-film';
import { iUser } from './modules/i-user';
import { iAuth } from './modules/i-auth';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  URL_film: string = 'http://localhost:3000/film';
  URL_utenti: string = 'http://localhost:3000/users';

  get_all_films = (): Observable<iFilm[]> => {
    return this.http.get<iFilm[]>(this.URL_film);
  };

  get_all_utenti = (): Observable<iUser[]> => {
    return this.http.get<iUser[]>(this.URL_utenti);
  };

  get_utente = (): Observable<iUser> | undefined=> {
    let accessDataJson = localStorage.getItem('accessData');
    let finale
    if (accessDataJson) {
      const accessData: iAuth = JSON.parse(accessDataJson);
      finale =  this.http.get<iUser>(`${this.URL_utenti}/${accessData.user.id}`);
    }
    return finale
  };


}
