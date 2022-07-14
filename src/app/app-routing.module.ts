import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';

import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path:'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
