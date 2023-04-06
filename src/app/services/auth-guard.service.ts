import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterService } from './router.service';
import { ToastService } from './toast.service';
import { EventTypes } from '../models/event-types';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private routerSrvice: RouterService, private toastService: ToastService,) { }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem("placeToken") != null) {
      return true
    }
    this.routerSrvice.route("/auth/sign-in")
    return false
  }
}
