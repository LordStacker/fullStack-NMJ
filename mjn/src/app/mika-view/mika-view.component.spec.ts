import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikaViewComponent } from './mika-view.component';

describe('MikaViewComponent', () => {
  let component: MikaViewComponent;
  let fixture: ComponentFixture<MikaViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MikaViewComponent]
    });
    fixture = TestBed.createComponent(MikaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
