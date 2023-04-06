import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }

  baseUrl = 'https://placecmr.onrender.com/';
  baseUrlSignIn = 'https://placecmr.onrender.com/login/';
  baseUrlSignUp = 'https://placecmr.onrender.com/register/';
  baseUrlRefreshToken = 'https://placecmr.onrender.com/refresh_token/';


}
