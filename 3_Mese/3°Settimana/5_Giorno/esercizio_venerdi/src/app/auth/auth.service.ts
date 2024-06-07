import { Injectable } from '@angular/core';
import { iAuth } from '../modules/i-auth';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { iUser } from '../modules/i-user';
import { iAuthData } from '../modules/i-auth-data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubject = new BehaviorSubject<null|iUser>(null);//se nel behaviorsubject c'è null significa che l'utente non è loggato, altrimenti conterrà l'oggetto user con tutte le sue info

  syncIsLoggedIn:boolean = false;//Utilizziamo questa variabile all'interno dell'interceptor e delle guard per poter sapere se l'utente è loggato o meno.

  user$ = this.authSubject.asObservable()//contiene i dati dell'utente loggato oppure null

  isLoggedIn$ = this.user$.pipe(
    map(user => !!user), // fa si che il risultato tori un booleano
    tap(user => this.syncIsLoggedIn = user)
  )

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  URL_resgister = "http://localhost:3000/register"
  URL_login = "http://localhost:3000/login"

  register(newUser:Partial<iUser>):Observable<iAuth>{
    return this.http.post<iAuth>(this.URL_resgister,newUser)
  }


  login(authData:Partial<iUser>):Observable<iAuth>{
    return this.http.post<iAuth>(this.URL_login, authData)
    .pipe(tap(data=>{
      console.log(data)
      this.authSubject.next(data.user)
      console.log(this.user$)
      localStorage.setItem('accessData',JSON.stringify(data))
    }))
  }

  logout():void{

    this.authSubject.next(null)
    localStorage.removeItem('accessData')

    this.router.navigate(['/auth/login'])

  }

  getAccessData():iAuth|null{

    const accessDataJson = localStorage.getItem('accessData')
    if(!accessDataJson) return null


    const accessData:iAuth = JSON.parse(accessDataJson)

    return accessData;
  }
}
