import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { TestScheduler } from 'rxjs/testing';
import { By } from '@angular/platform-browser';
import { CounterService } from '../counter.service';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: [
        {
          provide: CounterService,
          useValue: {
            getCounter: () =>
              scheduler.createColdObservable('--a--b--c', {
                a: 100,
                b: 101,
                c: 102,
              }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fake counter observable', () => {
    scheduler.flush();
    fixture.detectChanges();
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect((h1.nativeElement as HTMLHeadingElement).textContent).toEqual('102');
  });
});
