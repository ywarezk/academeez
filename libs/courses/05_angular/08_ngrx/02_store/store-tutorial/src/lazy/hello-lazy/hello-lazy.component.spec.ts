import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloLazyComponent } from './hello-lazy.component';

describe('HelloLazyComponent', () => {
  let component: HelloLazyComponent;
  let fixture: ComponentFixture<HelloLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
