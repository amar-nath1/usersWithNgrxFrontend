import { Routes } from '@angular/router';
import { App } from './app';
import { formDataResolver } from './resolvers/form-data-resolver';
import { MyForm } from './pages/my-form/my-form';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [{
    path: '',
    component: MyForm,
    resolve: {
        ready: formDataResolver
    }
},

{
    path: 'admin',
    loadComponent: ()=> import('./pages/admin/admin').then(m=>m.Admin),
    canActivate: [authGuard]
}

];
