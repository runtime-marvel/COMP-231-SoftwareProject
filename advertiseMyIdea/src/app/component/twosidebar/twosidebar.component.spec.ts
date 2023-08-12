import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwosidebarComponent } from './twosidebar.component';

describe('TwosidebarComponent', () => {
  let component: TwosidebarComponent;
  let fixture: ComponentFixture<TwosidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwosidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwosidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
