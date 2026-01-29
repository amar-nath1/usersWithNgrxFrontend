import { createFeatureSelector, createSelector } from "@ngrx/store";

export const formDataFeatureSelector = createFeatureSelector<any>('formData');

export const formDataSelector = createSelector(
  formDataFeatureSelector,
  (formDataState) => formDataState.formDatas
);