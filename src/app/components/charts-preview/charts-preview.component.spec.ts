import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsPreviewComponent } from './charts-preview.component';

describe('ChartsPreviewComponent', () => {
  let component: ChartsPreviewComponent;
  let fixture: ComponentFixture<ChartsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
