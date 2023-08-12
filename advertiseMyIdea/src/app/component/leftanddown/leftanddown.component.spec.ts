import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftanddownComponent } from './leftanddown.component';

describe('LeftanddownComponent', () => {
  let component: LeftanddownComponent;
  let fixture: ComponentFixture<LeftanddownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftanddownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftanddownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
