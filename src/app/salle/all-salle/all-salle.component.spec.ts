import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSalleComponent } from './all-salle.component';

describe('AllSalleComponent', () => {
  let component: AllSalleComponent;
  let fixture: ComponentFixture<AllSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllSalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
