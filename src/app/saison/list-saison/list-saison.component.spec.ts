import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSaisonComponent } from './list-saison.component';

describe('ListSaisonComponent', () => {
  let component: ListSaisonComponent;
  let fixture: ComponentFixture<ListSaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSaisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
