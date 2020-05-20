import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDietPage } from './create-diet.page';

describe('CreateDietPage', () => {
  let component: CreateDietPage;
  let fixture: ComponentFixture<CreateDietPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDietPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
