import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeditComponent } from './ckedit.component';

describe('CkeditComponent', () => {
  let component: CkeditComponent;
  let fixture: ComponentFixture<CkeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
