import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNiveauxComponent } from './all-niveaux.component';

describe('AllNiveauxComponent', () => {
  let component: AllNiveauxComponent;
  let fixture: ComponentFixture<AllNiveauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllNiveauxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllNiveauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
