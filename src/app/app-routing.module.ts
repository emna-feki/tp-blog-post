import { HttpClientModule }         from '@angular/common/http';
import { NgModule }                 from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
}                                   from '@angular/forms';
import { BrowserModule }            from '@angular/platform-browser';
import {
  RouterModule,
  Routes,
}                                   from '@angular/router';
import { AfficheItemPostComponent } from './affiche-item-post/affiche-item-post.component';
import { AffichePostComponent }     from './affiche-post/affiche-post.component';
import { FourOhFourComponent }      from './four-oh-four/four-oh-four.component';
import { NewPostComponent }         from './new-post/new-post.component';
import { AuthGuardService }         from './services/auth-guard.service';
import { SigninComponent }          from './signin/signin.component';
import { SignupComponent }          from './signup/signup.component';

const routes: Routes = [
  { path: 'affichePost' , canActivate: [AuthGuardService], component: AffichePostComponent },
  { path: 'afficheItemPost' , canActivate: [AuthGuardService], component: AfficheItemPostComponent},
  { path: 'newPost' , canActivate: [AuthGuardService], component: NewPostComponent},
  { path: 'signup' , component: SignupComponent},
  { path: 'signin' , component: SigninComponent},
  { path: '' , component: AfficheItemPostComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];
// canActivate: [AuthGuardService],

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
