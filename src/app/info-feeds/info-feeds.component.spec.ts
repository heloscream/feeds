import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFeedsComponent } from './info-feeds.component';

describe('InfoFeedsComponent', () => {
  let component: InfoFeedsComponent;
  let fixture: ComponentFixture<InfoFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
