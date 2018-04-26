import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaarrekeningvergelijkingComponent } from './jaarrekeningvergelijking.component';

describe('JaarrekeningvergelijkingComponent', () => {
  let component: JaarrekeningvergelijkingComponent;
  let fixture: ComponentFixture<JaarrekeningvergelijkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaarrekeningvergelijkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaarrekeningvergelijkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
