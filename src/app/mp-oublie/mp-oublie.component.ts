import {Component, Inject, Injectable, Input, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData, SigninComponent} from '../signin/signin.component';
import AuthProvider = firebase.auth.AuthProvider;
import {AuthService} from '../services/auth.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-mp-oublie',
  templateUrl: './mp-oublie.component.html',
  styleUrls: ['./mp-oublie.component.scss']
})

export class MpOublieComponent {
  mpOublierForm: FormGroup;
  email = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public auth: AuthService,
              private formBuilder: FormBuilder) {
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

  }


}
