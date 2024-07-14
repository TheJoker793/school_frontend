import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmploiComponent } from './detail-emploi.component';

describe('DetailEmploiComponent', () => {
  let component: DetailEmploiComponent;
  let fixture: ComponentFixture<DetailEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailEmploiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
