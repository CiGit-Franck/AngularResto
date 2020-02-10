import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoReviewListComponent } from './resto-review-list.component';

describe('RestoReviewListComponent', () => {
  let component: RestoReviewListComponent;
  let fixture: ComponentFixture<RestoReviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoReviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
