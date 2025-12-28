//============================================= Subject ========================================================

// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// @Injectable({
//   providedIn: 'root',
// })
// export class CounterService {
//     private countSubject = new Subject<number>();
//     count$ = this.countSubject.asObservable();
//     private currentCount: number = 0;
//      increment() {
//       this.currentCount++;
//       this.countSubject.next(this.currentCount); // Emit the new count
//     }
//     reset() {
//       this.currentCount = 0;
//       this.countSubject.next(this.currentCount); // Emit the reset count
//     }}

//============================================= Subject Behavior ========================================================

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterService {
  // BehaviorSubject to store the current counter value, starting at 0
  private countSubject = new BehaviorSubject<number>(0);
  // Observable to expose the current counter value
  count$ = this.countSubject.asObservable();
   increment() {
    this.countSubject.next(this.countSubject.value + 1);
  }
  reset() {
    this.countSubject.next(0);
  }}
