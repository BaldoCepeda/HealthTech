import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditivesInfoPage } from './additives-info.page';

describe('AdditivesInfoPage', () => {
  let component: AdditivesInfoPage;
  let fixture: ComponentFixture<AdditivesInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditivesInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditivesInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
