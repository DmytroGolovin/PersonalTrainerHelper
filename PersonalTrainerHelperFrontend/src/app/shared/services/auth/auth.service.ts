import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _fireAuth: AngularFireAuth) { }

  public singIn(email: string, password: string): Observable<any>{
    return from(this._fireAuth.signInWithEmailAndPassword(email, password));
  }

  public singOut(){
    localStorage.removeItem('currentUser');
    return from(this._fireAuth.signOut());
  }

  public setLoggedInUser(user: any){
    let loggedUser: User = {
      uid : user.uid,
      email : user.email,
      photoURL : user.photoURL,
      displayName : user.displayName
    }

    localStorage.setItem('currentUser', JSON.stringify(loggedUser));
  }

  public getCurrentUser(){
    let userString = localStorage.getItem('currentUser');
    let user: User = JSON.parse(userString)
    return user;
  }
}