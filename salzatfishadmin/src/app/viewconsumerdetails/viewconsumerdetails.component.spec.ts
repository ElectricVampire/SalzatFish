import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconsumerdetailsComponent } from './viewconsumerdetails.component';

describe('ViewconsumerdetailsComponent', () => {
  let component: ViewconsumerdetailsComponent;
  let fixture: ComponentFixture<ViewconsumerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewconsumerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewconsumerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
