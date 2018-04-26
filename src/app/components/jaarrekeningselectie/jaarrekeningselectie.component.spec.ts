import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaarrekeningSelectieComponent } from './jaarrekening-selectie.component';

describe('JaarrekeningSelectieComponent', () => {
  let component: JaarrekeningSelectieComponent;
  let fixture: ComponentFixture<JaarrekeningSelectieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaarrekeningSelectieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaarrekeningSelectieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
