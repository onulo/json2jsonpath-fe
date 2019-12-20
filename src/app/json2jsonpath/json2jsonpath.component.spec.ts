import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Json2jsonpathComponent } from './json2jsonpath.component';

describe('Json2jsonpathComponent', () => {
  let component: Json2jsonpathComponent;
  let fixture: ComponentFixture<Json2jsonpathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Json2jsonpathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Json2jsonpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
