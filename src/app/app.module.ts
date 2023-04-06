import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { HeaderComponent } from './layouts/header/header.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchBarComponent } from './layouts/search-bar/search-bar.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ResultComponent } from './components/start/result/result.component';
import { SpinnerComponent } from './layouts/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HeaderComponent,
    SearchBarComponent,
    SignInComponent,
    SignupComponent,
    ForgotPasswordComponent,
    FooterComponent,
    ResultComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
