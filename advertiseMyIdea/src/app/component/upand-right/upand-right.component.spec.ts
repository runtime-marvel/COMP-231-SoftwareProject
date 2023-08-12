import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpandRightComponent } from './upand-right.component';

describe('UpandRightComponent', () => {
  let component: UpandRightComponent;
  let fixture: ComponentFixture<UpandRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpandRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpandRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
