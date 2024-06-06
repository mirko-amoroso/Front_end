import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iUser } from '../modules/i-user';
import { iAuthRespone } from '../modules/i-auth-respone';
import { BehaviorSubject, Observable, Observer, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSerService {

  authSubject = new BehaviorSubject<null|iUser>(null);

  constructor(private http:HttpClient ){}

  Url_register:string = "http://localhost:3000/register"
  Url_login:string = "http://localhost:3000/login"



  register = (newuser:Partial<iUser>):Observable<iAuthRespone> => {
    return this.http.post<iAuthRespone>(this.Url_register, newuser)
  }



 login = (partial_user:Partial<iUser>):Observable<iAuthRespone> => {
  return this.http.post<iAuthRespone>(this.Url_login, partial_user).pipe(tap(data=>{

    this.authSubject.next(data.user)
    localStorage.setItem('accessData',JSON.stringify(data))
  }))
 }

  // logout = () => {

  // }
}
