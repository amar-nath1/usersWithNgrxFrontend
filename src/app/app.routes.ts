import { Routes } from '@angular/router';
import { App } from './app';
import { formDataResolver } from './resolvers/form-data-resolver';

export const routes: Routes = [{
    path: '',
    component: App,
    resolve: {
        ready: formDataResolver
    }
}];
