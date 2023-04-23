import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }
  baseUrl = 'http://api.plcace.salakaimmo.com:8000/'
  // baseUrl = 'http://54.37.19.249:8000/'
  baseUrlSignIn = this.baseUrl + 'login/';
  baseUrlSignUp = this.baseUrl + 'register/';
  baseUrlRefreshToken = this.baseUrl + 'refresh_token/';
  baseUrlUploadProfilePicture = this.baseUrl + 'change_profile/';
  baseUrlUploadProfile = this.baseUrl + 'update/';
  baseUrlUpdatePassword = this.baseUrl + 'change_password/';
  baseUrlSuggest = this.baseUrl + 'suggest/';
  baseUrlHistory = this.baseUrl + 'recents/';


}
