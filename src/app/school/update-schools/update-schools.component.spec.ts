import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSchoolsComponent } from './update-schools.component';

describe('UpdateSchoolsComponent', () => {
  let component: UpdateSchoolsComponent;
  let fixture: ComponentFixture<UpdateSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateSchoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
