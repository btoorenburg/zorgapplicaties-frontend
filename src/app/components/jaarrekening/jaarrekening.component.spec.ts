import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaarrekeningComponent } from './jaarrekening.component';

describe('JaarrekeningComponent', () => {
  let component: JaarrekeningComponent;
  let fixture: ComponentFixture<JaarrekeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaarrekeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaarrekeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
