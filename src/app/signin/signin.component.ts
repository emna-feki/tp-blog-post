import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MpOublieComponent } from '../mp-oublie/mp-oublie.component';

// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router, public dialog: MatDialog,
  ) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(MpOublieComponent);
  }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
    });
  }

  onSubmit() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;

    this.authService.signInUser(email, password)
        .then(() => {
          this.router.navigate(['/afficheItemPost']);
        })
        .catch((error) => {
          this.errorMessage = error;
        });
  }

}
