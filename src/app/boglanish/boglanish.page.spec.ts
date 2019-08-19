import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoglanishPage } from './boglanish.page';

describe('BoglanishPage', () => {
  let component: BoglanishPage;
  let fixture: ComponentFixture<BoglanishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoglanishPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoglanishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
