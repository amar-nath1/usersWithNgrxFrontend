import { Component } from '@angular/core';
import { Form, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addFormData, loadUsers } from '../../store/actions/formData.actions';
import { Observable } from 'rxjs';
import { formDataSelector, formDataFeatureSelector } from '../../store/selector/formData.selector';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-my-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './my-form.html',
  styleUrl: './my-form.scss',
})
export class MyForm {
public myForm;
public usersData: any;
public formDataList$: Observable<any>;
  constructor(private fb: FormBuilder,
    private store: Store
  ) {
    this.myForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.email]],
      age: [0,[Validators.pattern('^\\+?[1-9]\\d{1,14}$')]],
    });

    this.formDataList$ = this.store.select(formDataSelector)
    this.formDataList$.subscribe(data => {
      this.usersData = data
      console.log('Form Data List from Store:', data);
    });

  
  }

  onSubmit() {
    // Handle form submission
const value = this.myForm.value;
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);

this.store.dispatch(addFormData({
  formData: {
    name: value.name as string,
    email: value.email as string,
    age: value.age as number,
  }
}))
    }
  }

}
