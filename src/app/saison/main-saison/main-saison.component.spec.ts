import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSaisonComponent } from './main-saison.component';

describe('MainSaisonComponent', () => {
  let component: MainSaisonComponent;
  let fixture: ComponentFixture<MainSaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainSaisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
