import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchoolsComponent } from './add-schools.component';

describe('AddSchoolsComponent', () => {
  let component: AddSchoolsComponent;
  let fixture: ComponentFixture<AddSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSchoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
