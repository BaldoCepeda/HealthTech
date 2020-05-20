import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietsDetailPage } from './diets-detail.page';

describe('DietsDetailPage', () => {
  let component: DietsDetailPage;
  let fixture: ComponentFixture<DietsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietsDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
