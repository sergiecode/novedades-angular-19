import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalHydrationComponent } from './incremental-hydration.component';

describe('IncrementalHydrationComponent', () => {
  let component: IncrementalHydrationComponent;
  let fixture: ComponentFixture<IncrementalHydrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementalHydrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementalHydrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
