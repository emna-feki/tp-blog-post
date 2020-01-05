import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    resolve();
                  },
                  (error) => {
                    reject(error);
                  },
                );
      },
    );
  }

  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
        firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    resolve();
                  },
                  (error) => {
                    reject(error);
                  },
                );
      },
    );
  }

  signOutUser() {
    firebase.auth()
            .signOut();
  }

  resetPassword(email: string) {
    return firebase.auth()
                   .sendPasswordResetEmail(email)
                   .then(() => console.log('email sent'))
                   .catch((error) => console.log(error));
  }
}

