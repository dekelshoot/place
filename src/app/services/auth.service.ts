import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DaoService } from './dao.service';
import { User } from '../models/user.model';
import { Password } from '../models/password.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubject = new Subject<boolean>();
  userSubject = new Subject<string>();
  isAuth = false;
  user = "";
  statut = "";
  constructor(private daoService: DaoService) { }




  signInUser(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {
        const data = {
          email: email,
          password: password
        }
        console.log(data)
        this.daoService.signIn(data).subscribe(
          (res: any) => {
            console.log(res)
            resolve(res)
          },
          error => {
            console.log(error)
            reject(error)
          }

        )
      }
    );
  }

  signUpUser(user: User) {
    return new Promise<void>(
      (resolve, reject) => {

        console.log(user)
        this.daoService.signUp(user).subscribe(
          (res: any) => {
            console.log(res)
            resolve(res)
          },
          error => {
            console.log(error)
            reject(error)
          }

        )
      }
    );
  }


  uploadPictureProfileFile(picture: File) {
    return new Promise<void>(
      (resolve, reject) => {
        let formData = new FormData()
        formData.append("profile_picture", picture);
        this.daoService.uploadProfilPicture(formData).subscribe(
          (res: any) => {
            console.log(res)
            resolve(res)
          },
          error => {
            console.log(error)
            reject(error)
          }

        )
      }
    );
  }

  changePassword(data: Password) {
    return new Promise<void>(
      (resolve, reject) => {
        console.log(data)
        this.daoService.updatePassword(data).subscribe(
          (res: any) => {
            console.log(res)
            resolve(res)
          },
          error => {
            console.log(error)
            reject(error)
          }

        )
      }
    );
  }
  UpdateProfile(user: User) {
    return new Promise<void>(
      (resolve, reject) => {
        this.daoService.uploadProfile(user).subscribe(
          (res: any) => {
            console.log(res)
            resolve(res)
          },
          error => {
            console.log(error)
            reject(error)
          }

        )
      }
    );
  }

  // signOut() {
  //   this.isAuth = false;
  //   this.user = "";
  //   this.emitUser()
  //   this.emitAuth()
  // }

  // updatePassword(data:any){
  //   return new Promise<void>(
  //     (resolve,reject) => {
  //       this.daoService.UpdateProfil(data).subscribe(
  //         (res:any)=>{
  //           this.isAuth=true;
  //           this.emitAuth()
  //           this.emitUser()
  //           resolve(res)
  //         },
  //         error =>{
  //           console.log(error)
  //           reject(error)
  //         }

  //       )
  //     }
  //   )
  // }
}
