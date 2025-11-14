import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgfComponent } from './ggf.component';

describe('GgfComponent', () => {
  let component: GgfComponent;
  let fixture: ComponentFixture<GgfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GgfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GgfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
