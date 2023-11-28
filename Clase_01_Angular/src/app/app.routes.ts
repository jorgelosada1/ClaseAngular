import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Register/register.component';
import { RecuperationComponent } from './recuperation/recuperation.component';

import { RedirectionComponent } from './redirection/redirection.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'recuperation', component: RecuperationComponent},
    {path: 'redirection', component: RedirectionComponent}




];
