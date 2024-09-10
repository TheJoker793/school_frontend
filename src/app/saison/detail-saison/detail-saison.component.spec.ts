import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSaisonComponent } from './detail-saison.component';

describe('DetailSaisonComponent', () => {
  let component: DetailSaisonComponent;
  let fixture: ComponentFixture<DetailSaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailSaisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailSaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
