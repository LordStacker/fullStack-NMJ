import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JakovViewComponent } from './jakov-view.component';

describe('JakovViewComponent', () => {
  let component: JakovViewComponent;
  let fixture: ComponentFixture<JakovViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JakovViewComponent]
    });
    fixture = TestBed.createComponent(JakovViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
