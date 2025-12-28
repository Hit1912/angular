import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Authservice {
  private loggedIn = false; // default state

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
  login(): void {
    this.loggedIn = true;
  }
  logout(): void {
    this.loggedIn = false;
  }}
