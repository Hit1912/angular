import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class UserService {
  private users = [
    { id: 1, name: 'DKP' },
    { id: 2, name: 'HRG' },
    { id: 3, name: 'EDJ' }
  ];
  getUsers() {
    return [...this.users]; 
  }
  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }}