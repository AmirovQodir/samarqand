import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmenPage } from './admen.page';

describe('AdmenPage', () => {
  let component: AdmenPage;
  let fixture: ComponentFixture<AdmenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
