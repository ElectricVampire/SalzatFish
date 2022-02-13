import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconsumerdetailsComponent } from './addconsumerdetails.component';

describe('AddconsumerdetailsComponent', () => {
  let component: AddconsumerdetailsComponent;
  let fixture: ComponentFixture<AddconsumerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddconsumerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddconsumerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
