import { createAction, props } from "@ngrx/store";
import  { FormData } from "../models/formData.model";

export const addFormData = createAction(
  '[Form Data] Add Form Data',
  props<{formData: FormData}>()
);

export const addFormDataSuccess = createAction(
  '[Form Data] Add Form Data Success',
  props<{formData: FormData}>()
)

export const addFormDataFailure = createAction(
  '[Form Data] Add Form Data Failure',
  props<{error:string}>()
)

export const loadUsers = createAction(
  '[USERS] Load Users'
);

export const loadUsersSuccess = createAction(
  '[USERS] Load Users Success',
  props<{users: any[]}>()
);

export const loadUsersFailure = createAction(
  '[USERS] Load Users Failure',
  props<{error: any}>()
);