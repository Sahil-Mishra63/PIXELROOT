import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecharcadeComponent } from './techarcade.component';

describe('TecharcadeComponent', () => {
  let component: TecharcadeComponent;
  let fixture: ComponentFixture<TecharcadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecharcadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecharcadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
