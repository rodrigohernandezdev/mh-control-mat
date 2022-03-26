import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeHoldComponent } from './make-hold.component';

describe('MakeHoldComponent', () => {
  let component: MakeHoldComponent;
  let fixture: ComponentFixture<MakeHoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeHoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
