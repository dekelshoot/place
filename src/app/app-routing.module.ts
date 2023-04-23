import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { EditComponent } from './components/profil/edit/edit.component';
import { ResultComponent } from './components/start/result/result.component';
import { StartComponent } from './components/start/start.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProfilComponent } from './components/profil/profil.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  { path: 'get-started', component: GetStartedComponent },
  { path: 'start', canActivate: [AuthGuardService], component: StartComponent },
  { path: 'search', canActivate: [AuthGuardService], component: ResultComponent },
  { path: 'profil', canActivate: [AuthGuardService], component: ProfilComponent },
  { path: 'edit-profil', canActivate: [AuthGuardService], component: EditComponent },
  { path: 'history', canActivate: [AuthGuardService], component: HistoryComponent },
  { path: 'auth/sign-in', component: SignInComponent },
  { path: 'auth/sign-up', component: SignupComponent },
  { path: 'auth/forgot-password', component: ForgotPasswordComponent },
  { path: '', pathMatch: 'full', component: GetStartedComponent },
  // { path: '404', component: ForforComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
