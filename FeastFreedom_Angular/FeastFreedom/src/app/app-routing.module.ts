import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { KitchenComponent } from './kitchen/kitchen.component'
const routes: Routes = [
  {path: '',
  redirectTo: '/',
   pathMatch: 'full'},
  {path: 'login',
  component: LoginComponent},
  {path: 'register',
  component: RegisterComponent},
  {path: 'kitchen',
  component: KitchenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
