import { HttpClientModule } from '@angular/common/http';
import { NgModule }         from '@angular/core';
import {
  ReactiveFormsModule,
}                           from '@angular/forms';
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
import { AfficheItemPostComponent } from './affiche-item-post/affiche-item-post.component';
import { NewPostComponent }         from './new-post/new-post.component';
import { HeaderComponent }          from './header/header.component';
import { SignupComponent }          from './signup/signup.component';
import { FourOhFourComponent }      from './four-oh-four/four-oh-four.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    AffichePostComponent,
    AfficheItemPostComponent,
    NewPostComponent,
    HeaderComponent,
    SignupComponent,
    FourOhFourComponent,
    SigninComponent,
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
    MatFormFieldModule
    
  ],
  providers: [
    PostService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
