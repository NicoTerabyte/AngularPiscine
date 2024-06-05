import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true
  isAdmin = false

  constructor() { }

  isAuthenticated(): boolean
  {
    return this.isLoggedIn
  }
  isSuperUser(): boolean
  {
    return this.isAdmin
  }
  login(): void
  {
    this.isLoggedIn = true
  }
  logout(): void
  {
    this.isLoggedIn = false
  }
}
