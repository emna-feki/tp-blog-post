import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSliderModule,
  MatTabsModule,
} from '@angular/material';

import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffichePostComponent } from './affiche-post/affiche-post.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';
import { AfficheListPostComponent } from './affiche-list-post/affiche-list-post.component';
import { NewPostComponent } from './nouv-post/new-post.component';
import { HeaderComponent } from './menu/header.component';
import { SignupComponent } from './signup/signup.component';
import { FourOhFourComponent } from './page-erreur/four-oh-four.component';
import { SigninComponent } from './signin/signin.component';
import { MpOublieComponent } from './mp-oublie/mp-oublie.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatDialogModule,
    MatSnackBarModule

  ],
  providers: [
    PostService,
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
