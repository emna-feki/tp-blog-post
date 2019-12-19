import {Component, Inject, Injectable, Input, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData, SigninComponent} from '../signin/signin.component';
import AuthProvider = firebase.auth.AuthProvider;
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-mp-oublie',
  templateUrl: './mp-oublie.component.html',
  styleUrls: ['./mp-oublie.component.scss']
})

export class MpOublieComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public auth: AuthService) {
  }

  mpOublie(email: string) {
    this.auth.resetPassword(email);

  }



}
