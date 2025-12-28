import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveEx } from './reactive-ex';

describe('ReactiveEx', () => {
  let component: ReactiveEx;
  let fixture: ComponentFixture<ReactiveEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
