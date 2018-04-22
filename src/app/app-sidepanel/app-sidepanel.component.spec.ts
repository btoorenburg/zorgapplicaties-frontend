import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidepanelComponent } from './app-sidepanel.component';

describe('AppSidepanelComponent', () => {
  let component: AppSidepanelComponent;
  let fixture: ComponentFixture<AppSidepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
