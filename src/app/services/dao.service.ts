import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoutesService } from './routes.service';
import { RequetesService } from './requetes.service';


@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor(private http: HttpClient,
    private route: RoutesService,
    private requete: RequetesService) { }


  signIn(data: any) {
    return this.requete.post(this.route.baseUrlSignIn, data)
  }
  signUp(data: any) {
    return this.requete.post(this.route.baseUrlSignUp, data)
  }


}
