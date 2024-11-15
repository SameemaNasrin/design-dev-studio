import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitiveCardComponent } from './competitive-card.component';

describe('CompetitiveCardComponent', () => {
  let component: CompetitiveCardComponent;
  let fixture: ComponentFixture<CompetitiveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitiveCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
