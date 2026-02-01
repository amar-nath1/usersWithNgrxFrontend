import { Injectable } from '@angular/core';
import { ApiMethods } from './api-methods';
import { FormData } from '../store/models/formData.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {

  constructor(private apiMethods: ApiMethods) {

  }

  getUsers(){
    
return this.apiMethods.getWithoutModel('/users').pipe(
  map((response: any) => response.map((item: any)=>{
    return {
      name: item.name,
      email: item.email,
      age: item.age
    }
  }))
);
  }

  postUsers(body: FormData){
    return this.apiMethods.postWithoutModel('/users',body)
  }
  
}
