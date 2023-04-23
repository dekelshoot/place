import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Password } from 'src/app/models/password.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { DealerService } from '../../../services/dealer.service';
import { RoutesService } from 'src/app/services/routes.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  editForm!: FormGroup;
  passwordForm!: FormGroup;
  errorMessage!: string;

  loading = false;
  start = false;
  success = false;
  error = false;
  modal = true;
  url: string = ""
  fileUploading = false;
  fileUploaded = false;
  charge = 5;
  fileUrl!: File;
  dealer!: any;
  id!: any;
  db !: string;


  errorMessagePassword!: string;
  successMessagePassword!: string;
  passwordLoading = false;
  errorPassword = false;
  successPassword = false;

  profileLoading = false;
  errorMessageProfile!: string;
  successMessageProfile!: string;
  errorProfile = false;
  successProfile = false;


  pictureLoading = false;
  errorMessagePicture!: string;
  successMessagePicture!: string;
  errorPicture = false;
  successPicture = false;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private routerService: RouterService,
    private dealerService: DealerService,
    private routesService: RoutesService
  ) { }

  ngOnInit(): void {
    document.getElementById("head")?.scrollIntoView();
    this.db = this.routesService.baseUrl
    this.routerService.setRoute("/profile");
    if (localStorage.getItem("placeUser") != null) {
      const local: any = localStorage.getItem("placeUser")
      this.dealer = JSON.parse(local);
      console.log(this.dealer)

    }

    console.log(this.dealer);
    this.initForm();
    this.editForm?.setValue({
      email: this.dealer.email,
      first_name: this.dealer.first_name,
      last_name: this.dealer.last_name,
      username: this.dealer.username
    });
    console.log(this.editForm)
  }
  onSubmit() {
    const user = new User();
    this.loading = true;
    this.start = true;
    this.error = false;
    this.success = false;
    user.email = this.editForm.get('email')?.value;
    user.first_name = this.editForm.get('first_name')?.value;
    user.last_name = this.editForm.get('last_name')?.value;
    user.username = this.editForm.get('username')?.value;
    console.log(user)
    this.profileLoading = true;
    this.errorProfile = false;
    this.authService.UpdateProfile(user).then(
      (res: any) => {
        localStorage.setItem("placeUser", JSON.stringify({
          ...this.dealer,
          ...res
        }))
        this.ngOnInit()
        // this.editForm?.setValue({
        //   email: res.User.email,
        //   first_name: res.User.first_name,
        //   last_name: res.User.last_name,
        //   username: res.User.username
        // });
        this.error = false;
        this.successProfile = true;
        this.profileLoading = false;
        this.errorMessageProfile = "";
        this.successMessageProfile = "Updated profile successfully !!!"

      },
      (error) => {
        console.log(error)
        this.profileLoading = false;
        this.success = false;
        this.errorProfile = true;
        this.successMessageProfile = ""
        this.errorMessageProfile = "Une erreur est survenue !!!"
        this.error = true

      }
    );



  }

  onSubmitPassword() {
    this.passwordLoading = true;
    let currentPassword = this.passwordForm.get('currentPassword')?.value;
    let newPassword = this.passwordForm.get('newPassword')?.value;
    let confirmPasword = this.passwordForm.get('confirmPasword')?.value;
    console.log(currentPassword, newPassword, confirmPasword)
    if (newPassword != confirmPasword) {
      this.errorPassword = true;
      this.errorMessagePassword = "le mot de passe ne correspond pas :("
      this.passwordLoading = false;
      this.error = true;
      this.success = false;
      return
    }
    this.errorPassword = false;
    let data: Password = {
      old_password: currentPassword,
      new_password: newPassword
    }
    console.log(data)
    this.authService.changePassword(data).then(
      (res: any) => {
        this.error = false;
        this.successProfile = true;
        this.passwordLoading = false;
        this.errorMessagePassword = "";
        this.successMessagePassword = res.detail

      },
      (error) => {
        console.log(error)
        this.passwordLoading = false;
        this.success = false;
        this.errorPassword = true;
        this.successMessagePassword = ""
        this.errorMessagePassword = error.error.old_password
        this.error = true

      }
    );
  }

  initForm() {
    this.editForm = this.formBuilder.group({
      last_name: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
    });
    this.passwordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPasword: ['', [Validators.required]],
    });
  }

  zindex() {
    return -10000
  }

  //uploader les images dans la base de donnee
  onUploadFile(file: File) {
    this.pictureLoading = true;
    this.errorPicture = false;
    this.fileUploading = true;
    this.authService.uploadPictureProfileFile(file).then(
      (res: any) => {
        localStorage.setItem("placeUser", JSON.stringify({
          ...this.dealer,
          profile_picture: res.url
        }))
        this.dealerService.getDealer()
        this.ngOnInit()
        this.fileUploading = false;
        this.error = false;
        this.successPicture = true;
        this.pictureLoading = false;
        this.errorMessagePicture = "";
        this.successMessagePicture = "Updated picture successfully !!!"
      }
    ).catch(() => {
      this.fileUploading = false;
      this.pictureLoading = false;
      this.success = false;
      this.errorPicture = true;
      this.successMessagePicture = ""
      this.errorMessagePicture = "Une erreur est survenue !!!"
      this.error = true
    })

  }

  //detecter les images selectionnes par l'utilisateur
  detectFiles(event: any) {
    let files = event.target.files;
    console.log(files)
    let i = 0;
    if (files) {
      this.onUploadFile(files[0]);
    }

  }



}
