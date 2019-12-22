import { HttpClientModule } from '@angular/common/http';
import { NgModule }         from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatSliderModule,
  MatTabsModule,
  MatMenuModule,
  MatInputModule,
  
}                           from '@angular/material';

import { MatCardModule }           from '@angular/material/card';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { AffichePostComponent }     from './affiche-post/affiche-post.component';
import { AuthGuardService }         from './services/auth-guard.service';
import { AuthService }              from './services/auth.service';
import { PostService }              from './services/post.service';
import { AfficheListPostComponent } from './affiche-list-post/affiche-list-post.component';
import { NewPostComponent }         from './new-post/new-post.component';
import { HeaderComponent }          from './header/header.component';
import { SignupComponent }          from './signup/signup.component';
import { FourOhFourComponent }      from './four-oh-four/four-oh-four.component';
import { SigninComponent }          from './signin/signin.component';
import { MpOublieComponent } from './mp-oublie/mp-oublie.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    AffichePostComponent,
    AfficheListPostComponent,
    NewPostComponent,
    HeaderComponent,
    SignupComponent,
    FourOhFourComponent,
    SigninComponent,
    MpOublieComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule

  ],
  providers: [
    PostService,
    AuthService,
    AuthGuardService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}

  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
