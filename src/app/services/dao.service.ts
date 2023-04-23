import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoutesService } from './routes.service';
import { RequetesService } from './requetes.service';
import { User } from '../models/user.model';
import { Password } from '../models/password.model';


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

  uploadProfilPicture(data: any) {

    console.log(data)
    return this.requete.postFileWithToken(this.route.baseUrlUploadProfilePicture, data)
  }

  uploadProfile(user: User) {
    return this.requete.postWithToken(this.route.baseUrlUploadProfile, user)
  }

  updatePassword(data: Password) {
    return this.requete.postWithToken(this.route.baseUrlUpdatePassword, data)
  }

  getSuggest(query: string) {
    return this.requete.postWithToken(this.route.baseUrlSuggest, { initial: query })
  }

  getHistory() {
    return this.requete.getAll(this.route.baseUrlHistory)
  }

  getPage(page: string) {
    return this.requete.getAll(page)
  }


}
