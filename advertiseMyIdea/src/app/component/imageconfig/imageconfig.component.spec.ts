import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageconfigComponent } from './imageconfig.component';

describe('ImageconfigComponent', () => {
  let component: ImageconfigComponent;
  let fixture: ComponentFixture<ImageconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageconfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
