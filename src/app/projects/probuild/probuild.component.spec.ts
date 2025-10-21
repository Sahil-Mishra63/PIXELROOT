import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbuildComponent } from './probuild.component';

describe('ProbuildComponent', () => {
  let component: ProbuildComponent;
  let fixture: ComponentFixture<ProbuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProbuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
