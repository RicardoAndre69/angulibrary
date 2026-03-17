import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyBook } from './daily-book';

describe('DailyBook', () => {
  let component: DailyBook;
  let fixture: ComponentFixture<DailyBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
