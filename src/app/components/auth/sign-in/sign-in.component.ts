import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterService } from 'src/app/services/router.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  errorMessage!: string;
  loading = false;
  success = false;
  error = false;


  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    public routerService: RouterService,) { }

  ngOnInit(): void {
    document.getElementById('head')?.scrollIntoView();
    this.routerService.setRoute("/auth/sign-in");
    document.getElementById("head")?.scrollIntoView();
    this.initForm();
  }
  onSubmit() {
    this.loading = true;
    this.error = false;
    this.success = false;
    const email = this.signInForm.get('email')?.value;
    const password = this.signInForm.get('password')?.value;
    const rememberMe = this.signInForm.get('rememberMe')?.value;
    console.log(rememberMe)
    this.authService.signInUser(email, password).then(
      (res: any) => {
        this.error = false;
        this.success = true;
        this.loading = false;
        if (rememberMe == true) {
          localStorage.setItem('placeToken', res.token)
        } else {
          localStorage.removeItem('placeToken');
        }
        this.routerService.route('/')
      },
      (error) => {
        console.log(error)
        this.loading = false;
        this.success = false;
        this.errorMessage = error.error.non_field_errors;
        this.error = true

      }
    );
  }

  initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      rememberMe: ['']
    });
  }






}


