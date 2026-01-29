import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { loadUsers, loadUsersFailure, loadUsersSuccess, addFormData, addFormDataSuccess, addFormDataFailure } from '../../actions/formData.actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { Api } from '../../../shared/api';

@Injectable({
  providedIn: 'root'
})
export class UsersEffects {

  loadUsers$;
  addUser$;

  constructor(private actions$: Actions,
    private apis: Api
  ) {
    this.loadUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadUsers),
        mergeMap(() =>
          this.apis.getUsers().pipe(
            map((usersData) => 
              loadUsersSuccess({ users: usersData as any })
            ),
            catchError(err => of(loadUsersFailure({ error: err })))
          )
        )
      )
    );


    this.addUser$ = createEffect(() => 
  this.actions$.pipe(
    ofType(addFormData),
    switchMap(({formData}) =>
    this.apis.postUsers(formData).pipe(
      map(()=>
      addFormDataSuccess({formData})
      ), catchError(err=> of( addFormDataFailure({error: err})))
    )
    )
  )
  )
  }


  
}