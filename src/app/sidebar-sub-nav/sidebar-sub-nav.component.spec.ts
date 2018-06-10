import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSubNavComponent } from './sidebar-sub-nav.component';

describe('SidebarSubNavComponent', () => {
  let component: SidebarSubNavComponent;
  let fixture: ComponentFixture<SidebarSubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSubNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
