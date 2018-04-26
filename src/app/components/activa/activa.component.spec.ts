import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivaComponent } from './activa.component';

describe('ActivaComponent', () => {
  let component: ActivaComponent;
  let fixture: ComponentFixture<ActivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
