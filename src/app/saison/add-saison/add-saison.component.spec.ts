import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaisonComponent } from './add-saison.component';

describe('AddSaisonComponent', () => {
  let component: AddSaisonComponent;
  let fixture: ComponentFixture<AddSaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSaisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
