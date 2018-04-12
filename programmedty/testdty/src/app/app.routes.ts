import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { RegisterComponent } from './register/index';
import { LoginComponent } from './login/index';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'login',  component: LoginComponent },
  { path: '**',    component: NoContentComponent },
];
