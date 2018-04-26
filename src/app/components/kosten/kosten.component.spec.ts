import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KostenComponent } from './kosten.component';

describe('KostenComponent', () => {
  let component: KostenComponent;
  let fixture: ComponentFixture<KostenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KostenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KostenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
