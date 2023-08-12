import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourCornerComponent } from './four-corner.component';

describe('FourCornerComponent', () => {
  let component: FourCornerComponent;
  let fixture: ComponentFixture<FourCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourCornerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
