import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNiveauxComponent } from './update-niveaux.component';

describe('UpdateNiveauxComponent', () => {
  let component: UpdateNiveauxComponent;
  let fixture: ComponentFixture<UpdateNiveauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateNiveauxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateNiveauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
