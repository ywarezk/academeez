import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandComponent } from './grand.component';

describe('GrandComponent', () => {
  let component: GrandComponent;
  let fixture: ComponentFixture<GrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
