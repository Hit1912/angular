// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.html',
//   styleUrl: './user.css',
// })
// export class User {

// }


import { Component } from '@angular/core';
import { Authservice } from '../service/authservice';
import { inject } from '@angular/core';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
private auth = inject(Authservice);
  login() {
    this.auth.login();
    alert('Logged in successfully!');   }
  logout() {
    this.auth.logout();
    alert(' Logged out!');
  }}
