import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssiduiteComponent } from './update-assiduite.component';

describe('UpdateAssiduiteComponent', () => {
  let component: UpdateAssiduiteComponent;
  let fixture: ComponentFixture<UpdateAssiduiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAssiduiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAssiduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
