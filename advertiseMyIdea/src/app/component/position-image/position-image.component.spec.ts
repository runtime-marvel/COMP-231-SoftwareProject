import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionImageComponent } from './position-image.component';

describe('PositionImageComponent', () => {
  let component: PositionImageComponent;
  let fixture: ComponentFixture<PositionImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
