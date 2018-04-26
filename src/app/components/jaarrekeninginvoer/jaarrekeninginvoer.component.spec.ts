import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaarrekeninginvoerComponent } from './jaarrekeninginvoer.component';

describe('JaarrekeninginvoerComponent', () => {
  let component: JaarrekeninginvoerComponent;
  let fixture: ComponentFixture<JaarrekeninginvoerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaarrekeninginvoerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaarrekeninginvoerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
