import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenmainComponent } from './genmain.component';

describe('GenmainComponent', () => {
  let component: GenmainComponent;
  let fixture: ComponentFixture<GenmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
