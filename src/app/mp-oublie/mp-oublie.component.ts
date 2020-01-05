import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
// DialogData,
import AuthProvider = firebase.auth.AuthProvider;
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mp-oublie',
  templateUrl: './mp-oublie.component.html',
  styleUrls: ['./mp-oublie.component.scss'],
})

export class MpOublieComponent {
  mpOublierForm: FormGroup;
  email = '';
  message: string;
  action: string;

  // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public auth: AuthService,
  //             private formBuilder: FormBuilder) {
  // }
  constructor(public auth: AuthService, private snackBar: MatSnackBar) {
  }

  // ngOnInit() {
  //   this.mpOublierForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //   });
  // }

  // mpOublie() {
  //   const email = this.mpOublierForm.get('email').value;
  //   this.auth.resetPassword(email);
  // }

  // setValue() {
  //   return  this.name;
  // }

  ////////////////////////////
  // onSubmit(f: NgForm) {
  //   console.log(f.value);  // { first: '', last: '' }
  // }

  mpOublie() {
    this.auth.resetPassword(this.email);
    // this.snackBar.open('Votre message est envoyé');
    this.snackBar.open('Votre message est envoyé', ' ok ', {duration: 2000});

  }

}
