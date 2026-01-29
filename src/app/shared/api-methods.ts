import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiMethods {
  
  constructor(public http: HttpClient){

  }

  getWithoutModel(url: string) {
    const apiUrl = 'http://localhost:5000/api' + url;
    return this.http.get(apiUrl).pipe(
      map((getResponse)=> getResponse)
    )
  }

  postWithoutModel(url: string, body: any){
    const apiUrl = 'http://localhost:5000/api' + url;
    return this.http.post(apiUrl, body).pipe(
      map((postResponse)=>postResponse)
    )
  }
}
