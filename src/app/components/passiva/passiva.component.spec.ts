import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassivaComponent } from './passiva.component';

describe('PassivaComponent', () => {
  let component: PassivaComponent;
  let fixture: ComponentFixture<PassivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
