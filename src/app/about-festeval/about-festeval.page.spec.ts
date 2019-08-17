import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFestevalPage } from './about-festeval.page';

describe('AboutFestevalPage', () => {
  let component: AboutFestevalPage;
  let fixture: ComponentFixture<AboutFestevalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFestevalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFestevalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
