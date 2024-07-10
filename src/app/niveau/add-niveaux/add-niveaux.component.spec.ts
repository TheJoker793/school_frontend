import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNiveauxComponent } from './add-niveaux.component';

describe('AddNiveauxComponent', () => {
  let component: AddNiveauxComponent;
  let fixture: ComponentFixture<AddNiveauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNiveauxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNiveauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
