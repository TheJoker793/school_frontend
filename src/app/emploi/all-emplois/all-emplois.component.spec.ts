import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmploisComponent } from './all-emplois.component';

describe('AllEmploisComponent', () => {
  let component: AllEmploisComponent;
  let fixture: ComponentFixture<AllEmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllEmploisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
