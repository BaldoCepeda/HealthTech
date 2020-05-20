import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueAdditivesPage } from './unique-additives.page';

describe('UniqueAdditivesPage', () => {
  let component: UniqueAdditivesPage;
  let fixture: ComponentFixture<UniqueAdditivesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueAdditivesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueAdditivesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
