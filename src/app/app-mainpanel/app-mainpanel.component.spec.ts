import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainpanelComponent } from './app-mainpanel.component';

describe('AppMainpanelComponent', () => {
  let component: AppMainpanelComponent;
  let fixture: ComponentFixture<AppMainpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
