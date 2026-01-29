import { FormData } from '../models/formData.model';


export interface FormDataState {
  formDatas: FormData[];
  loading: boolean;
  error: string | null;
}

export const initialFormDataState: FormDataState = {
  formDatas: [],
  loading: false,
  error: null
};

