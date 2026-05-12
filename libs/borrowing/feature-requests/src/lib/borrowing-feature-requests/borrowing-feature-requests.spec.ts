import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrowingFeatureRequests } from './borrowing-feature-requests';

describe('BorrowingFeatureRequests', () => {
  let component: BorrowingFeatureRequests;
  let fixture: ComponentFixture<BorrowingFeatureRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowingFeatureRequests],
    }).compileComponents();

    fixture = TestBed.createComponent(BorrowingFeatureRequests);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
