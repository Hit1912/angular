import { Component } from '@angular/core';
import { CounterService } from '../counter-service';
@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
count: number = 0;
  constructor(private cnt: CounterService) {}
  ngOnInit() {
    // Subscribe to the Subject to get the latest counter value (after any update)
    this.cnt.count$.subscribe((newCount) => {
      this.count = newCount;
    }); }
  increment() {
    this.cnt.increment(); // Increment the counter
  }
  reset() {
    this.cnt.reset(); // Reset the counter
  }}
