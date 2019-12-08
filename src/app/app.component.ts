import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCgj1G_S-uGfoudlOx0q5M_Jhmq6wbVsCU',
      authDomain: 'tp-blog-posts.firebaseapp.com',
      databaseURL: 'https://tp-blog-posts.firebaseio.com',
      projectId: 'tp-blog-posts\n',
      storageBucket: 'tp-blog-posts.appspot.com',
      messagingSenderId: '944657727798',
      appId: '1:944657727798:web:48cf91f1f363b80304b397',
      measurementId: 'G-4VKF6HK06B'
    });
  }
}
