import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssiduiteComponent } from './list-assiduite.component';

describe('ListAssiduiteComponent', () => {
  let component: ListAssiduiteComponent;
  let fixture: ComponentFixture<ListAssiduiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAssiduiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAssiduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
