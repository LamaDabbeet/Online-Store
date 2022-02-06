import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; //
  // userData: Observable<Firebase.User>;
  user$: any;
  constructor(private auth: Auth) {
    const authFirebase = getAuth();
    this.user$ = auth.currentUser;

    // const authFirebase = getAuth();
    // const user = auth.currentUser;
    // if (user !== null) {
    //   debugger;
    //   // The user object has basic properties such as display name, email, etc.
    //   const displayName = user.displayName;
    //   const email = user.email;
    //   const photoURL = user.photoURL;
    //   const emailVerified = user.emailVerified;
    //   const uid = user.uid;
    // }
  }

  async SignUp(email: string, password: string) {
    const res = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
  }

  SignIn(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  SignOut() {
    this.auth.signOut();
  }
}
