import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestevalsPleacePage } from './festevals-pleace.page';

describe('FestevalsPleacePage', () => {
  let component: FestevalsPleacePage;
  let fixture: ComponentFixture<FestevalsPleacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestevalsPleacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestevalsPleacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
