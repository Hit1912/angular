import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list',
  standalone: true,
   imports: [CommonModule],
  templateUrl:'./user-list.html'   
})
export class UserList {
  @Input() users: { id: number; name: string }[] = [];
  @Output() deleteUser = new EventEmitter<number>();
}