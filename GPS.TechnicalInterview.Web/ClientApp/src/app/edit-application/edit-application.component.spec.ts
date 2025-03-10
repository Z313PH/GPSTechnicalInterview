import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApplicationComponent } from './edit-application.component';

describe('CreateApplicationComponent', () => {
  let component: EditApplicationComponent;
  let fixture: ComponentFixture<EditApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
