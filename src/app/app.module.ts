import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ResultComponent } from './components/start/result/result.component';
import { StartComponent } from './components/start/start.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SearchBarComponent } from './layouts/search-bar/search-bar.component';
import { SpinnerComponent } from './layouts/spinner/spinner.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { DaoService } from './services/dao.service';
import { RequetesService } from './services/requetes.service';
import { EditComponent } from './components/profil/edit/edit.component';
import { ProfilComponent } from './components/profil/profil.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { DealerService } from './services/dealer.service';
import { HistoryComponent } from './components/history/history.component';
import { ControllerService } from './services/controller.service';
import { RoutesService } from './services/routes.service';

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
    SpinnerComponent,
    EditComponent,
    ProfilComponent,
    GetStartedComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    RequetesService,
    DaoService,
    DealerService,
    ControllerService,
    RoutesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
