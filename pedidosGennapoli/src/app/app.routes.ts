import { RouterModule, Routes } from '@angular/router';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'loginOrRegister', component: LoginAndRegisterComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }