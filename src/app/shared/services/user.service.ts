import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../model/user';
import { CryptoService } from './crypto.service';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  appUsers: Map<string, User> = new Map();

  constructor(private crytoService: CryptoService, private sessionStorageService: SessionStorageService) {
    const adminUser = new User('admin', 'admin@apple.com', this.crytoService.set('admin'));
    this.appUsers.set(adminUser.email, adminUser);
  }

  register(userToRegister: User): Observable<User> {
    if (this.appUsers.has(userToRegister.email)) {
      return throwError("User already exists");
    } else {
      userToRegister.password = this.crytoService.set(userToRegister.password);
      this.appUsers.set(userToRegister.email, userToRegister);
      return of(userToRegister);
    }
  }

  authenticate(email: string, password: string): Observable<User> {
    if (!this.appUsers.has(email) || password !== this.crytoService.get(this.appUsers.get(email).password)) {
      return throwError("Incorrect email or password");
    } else {
      this.sessionStorageService.setItem('authenticationToken', btoa(email + ':' + password));
      return of(this.appUsers.get(email));
    }
  }

}
