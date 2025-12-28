import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-array-ex',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-array-ex.html',
  styleUrl: './form-array-ex.css',
})
export class FormArrayEx {
 orderForm;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
  }

  createItem() {
    return this.fb.group({
      productName: this.fb.control('')
    });
  }

  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  addItem() {
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onSubmit() {
    alert(JSON.stringify(this.orderForm.value, null, 2));
  }}
