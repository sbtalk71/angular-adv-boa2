import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalResourceComponent } from './signal-resource.component';

describe('SignalResourceComponent', () => {
  let component: SignalResourceComponent;
  let fixture: ComponentFixture<SignalResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalResourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
