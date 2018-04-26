import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaarrekeningkpiComponent } from './jaarrekeningkpi.component';

describe('JaarrekeningkpiComponent', () => {
  let component: JaarrekeningkpiComponent;
  let fixture: ComponentFixture<JaarrekeningkpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaarrekeningkpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaarrekeningkpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
