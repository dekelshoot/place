import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterService } from 'src/app/services/router.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  constructor(private formBuilder: FormBuilder,
    // private authService: AuthService,
    public routerService: RouterService, private toastService: ToastService) { }


}
