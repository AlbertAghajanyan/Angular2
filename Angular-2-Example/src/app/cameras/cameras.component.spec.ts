import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasComponent } from './cameras.component';

describe('CamerasComponent', () => {
  let component: CamerasComponent;
  let fixture: ComponentFixture<CamerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
