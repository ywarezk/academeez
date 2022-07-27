import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCDStrategyComponent } from './check-cdstrategy.component';

describe('CheckCDStrategyComponent', () => {
  let component: CheckCDStrategyComponent;
  let fixture: ComponentFixture<CheckCDStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCDStrategyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckCDStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
