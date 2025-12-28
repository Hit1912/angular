import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive-ex',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-ex.html',
  styleUrl: './reactive-ex.css', })
export class ReactiveEx {
userForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    hobby: new FormControl('')
});
data: any = null;
onSubmit() {
    this.data = this.userForm.value;  }}
