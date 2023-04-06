import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
// import { ForforComponent } from './components/forfor/forfor.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ResultComponent } from './components/start/result/result.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'start', canActivate: [AuthGuardService], component: StartComponent },
  { path: 'search', canActivate: [AuthGuardService], component: ResultComponent },
  { path: 'auth/sign-in', component: SignInComponent },
  { path: 'auth/sign-up', component: SignupComponent },
  { path: 'auth/forgot-password', component: ForgotPasswordComponent },
  { path: '', pathMatch: 'full', canActivate: [AuthGuardService], component: StartComponent },
  // { path: '404', component: ForforComponent },
  // { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
