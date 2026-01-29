import { Injectable } from '@angular/core';
import { ApiMethods } from './api-methods';
import { FormData } from '../store/models/formData.model';

@Injectable({
  providedIn: 'root',
})
export class Api {

  constructor(private apiMethods: ApiMethods) {

  }

  getUsers(){
    
return this.apiMethods.getWithoutModel('/users')
  }

  postUsers(body: FormData){
    return this.apiMethods.postWithoutModel('/users',body)
  }
  
}
