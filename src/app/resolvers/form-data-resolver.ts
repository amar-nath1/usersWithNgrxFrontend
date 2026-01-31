import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { loadUsers, loadUsersSuccess } from '../store/actions/formData.actions';
import { map, take } from 'rxjs';

export const formDataResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store);
  const actions$ = inject(Actions);
  store.dispatch(loadUsers());
  return actions$.pipe(
    ofType(loadUsersSuccess),
    take(1),
    map(() => true)
  );
};
