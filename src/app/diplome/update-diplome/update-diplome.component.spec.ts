import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDiplomeComponent } from './update-diplome.component';

describe('UpdateDiplomeComponent', () => {
  let component: UpdateDiplomeComponent;
  let fixture: ComponentFixture<UpdateDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDiplomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
