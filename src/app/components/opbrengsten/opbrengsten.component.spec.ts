import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpbrengstenComponent } from './opbrengsten.component';

describe('OpbrengstenComponent', () => {
  let component: OpbrengstenComponent;
  let fixture: ComponentFixture<OpbrengstenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpbrengstenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpbrengstenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
