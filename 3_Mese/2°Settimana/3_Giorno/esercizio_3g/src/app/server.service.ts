import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iObj } from './components/modules/i-obj';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  apiUrl:string = "https://dummyjson.com/products"

  constructor(private http:HttpClient) { }

  get_all():Observable<iObj>{
    return this.http.get<iObj>(this.apiUrl);
  }
}
