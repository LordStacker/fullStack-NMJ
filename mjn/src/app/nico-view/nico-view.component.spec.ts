import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicoViewComponent } from './nico-view.component';

describe('NicoViewComponent', () => {
  let component: NicoViewComponent;
  let fixture: ComponentFixture<NicoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NicoViewComponent]
    });
    fixture = TestBed.createComponent(NicoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
