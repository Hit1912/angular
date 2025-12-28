import { Component, inject } from '@angular/core';
import { UserList } from '../user-list/user-list';
import { UserService } from '../user-service';
@Component({
  selector: 'app-user-container',
  standalone: true,
  imports: [UserList],
  templateUrl:'./user-container.html'
})
export class UserContainer {
  private userService = inject(UserService);
  users = this.userService.getUsers();
  onDelete(userId: number) {
    this.userService.deleteUser(userId);
    this.users = this.userService.getUsers(); // update view
  }}