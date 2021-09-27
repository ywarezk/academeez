import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpServiceService } from './http-service.service';

const testData = [
  { "id": 10104, "title": "title:0.7193547719438698", "description": "description:0.7402325067755231", "group": "group:test", "when": "2020-12-02T20:47:58.628000Z" },
  { "id": 10108, "title": "title:0.824672929631804", "description": "description:0.00103177017009215", "group": "group:test", "when": "2020-12-02T20:55:26.559000Z" },
  { "id": 10112, "title": "title:0.4579411370433868", "description": "description:0.6001902184924468", "group": "group:test", "when": "2020-12-02T20:57:09.100000Z" }
]

describe('HttpServiceService', () => {
  let service: HttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('HttpClient', ['get'])
        }
      ]
    });
    service = TestBed.inject(HttpServiceService);
  });

  it('should be created', () => {
    const httpSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    httpSpy.get.and.returnValue(of(testData))
    service.getTasks().subscribe((data) => expect(data.length).toEqual(3));
  });
});
