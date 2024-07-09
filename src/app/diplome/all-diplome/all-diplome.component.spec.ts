import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDiplomeComponent } from './all-diplome.component';

describe('AllDiplomeComponent', () => {
  let component: AllDiplomeComponent;
  let fixture: ComponentFixture<AllDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllDiplomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
