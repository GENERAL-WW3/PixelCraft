import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockproComponent } from './unlockpro.component';

describe('UnlockproComponent', () => {
  let component: UnlockproComponent;
  let fixture: ComponentFixture<UnlockproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockproComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
