import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DineeaseComponent } from './dineease.component';

describe('DineeaseComponent', () => {
  let component: DineeaseComponent;
  let fixture: ComponentFixture<DineeaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DineeaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DineeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
