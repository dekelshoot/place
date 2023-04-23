import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterService } from 'src/app/services/router.service';
// import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
// import { FileService } from 'src/app/services/file.service';
import { ToastService } from 'src/app/services/toast.service';
import { EventTypes } from 'src/app/models/event-types';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
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
  fileUrl!: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    public routerService: RouterService,
    // private fileService: FileService,
    private toastService: ToastService) { }

  ngOnInit(): void {
    document.getElementById('head')?.scrollIntoView();
    this.routerService.setRoute("/auth/sign-in");
    document.getElementById("head")?.scrollIntoView();
    this.initForm();
  }
  onSubmit() {
    const user = new User();
    this.loading = true;
    this.start = true;
    this.error = false;
    this.success = false;
    user.email = this.signUpForm.get('email')?.value;
    user.first_name = this.signUpForm.get('firstName')?.value;
    user.last_name = this.signUpForm.get('lastName')?.value;
    user.password = this.signUpForm.get('password')?.value;
    if (user.password != this.signUpForm.get('confirmePassword')?.value) {
      this.errorMessage = "le mot de passe ne correspond pas :("
      this.loading = false;
      this.error = true;
      this.success = false;
      return
    }
    user.confirm_password = this.signUpForm.get('confirmePassword')?.value;
    console.log(user)
    this.authService.signUpUser(user).then((user: any) => {
      console.log(user)
      this.error = false;
      this.start = false;
      this.success = true;
      this.loading = false;
      this.routerService.route('/auth/sign-in');

      // localStorage.setItem("salakaImmoDataUser", JSON.stringify(user))
    }, (error) => {
      this.start = false;
      this.loading = false;
      this.success = false;
      this.errorMessage = error.error.email;
      this.error = true
    })

  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      confirmePassword: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
    });
  }

  zindex() {
    return -10000
  }


  //uploader les images dans la base de donnee
  // onUploadFile(file: File) {
  //   this.fileUploading = true;
  //   this.fileService.uploadFile(file, "profils").then(
  //     (url: any) => {
  //       this.fileUrl = url;
  //       this.charge = 100;
  //       setTimeout(
  //         () => {
  //           this.fileUploading = false;
  //           this.fileUploaded = true;
  //         }, 2000
  //       )
  //     }
  //   )
  // }


  //detecter les images selectionnes par l'utilisateur
  detectFiles(event: any) {
    let file = event.target.files;
    let i = 0;
    if (file) {
      // this.onUploadFile(file[0]);
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.url = e.target.result;
      }
      reader.readAsDataURL(file[0]);
      i++;
    }
  }



}
