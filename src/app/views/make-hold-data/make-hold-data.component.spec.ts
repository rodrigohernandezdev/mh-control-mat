import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeHoldDataComponent } from './make-hold-data.component';

describe('MakeHoldDataComponent', () => {
  let component: MakeHoldDataComponent;
  let fixture: ComponentFixture<MakeHoldDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeHoldDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeHoldDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
