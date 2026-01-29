import { createReducer, on } from "@ngrx/store";
import { initialFormDataState } from "../states/formData.state";
import { addFormData, addFormDataSuccess, loadUsers, loadUsersFailure, loadUsersSuccess } from "../actions/formData.actions";

export const formDataReducer = createReducer(
  initialFormDataState,
  on(addFormData, (state) => ({
    ...state,loading: true
  })),

  on(addFormDataSuccess, (state, {formData})=> ({
    ...state, loading: false, formDatas: [...state.formDatas, formData]
  })),

  on(loadUsers,(state)=>({

    ...state, loading: true
  })),

  on(loadUsersSuccess,(state,{users})=>({
    ...state, loading:false, formDatas: [...state.formDatas,...users]
  })),

  on(loadUsersFailure, (state, {error})=>({
    ...state, loading: false, error
  }))
);