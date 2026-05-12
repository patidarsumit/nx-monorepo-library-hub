import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrowingDataAccess } from './borrowing-data-access';

describe('BorrowingDataAccess', () => {
  let component: BorrowingDataAccess;
  let fixture: ComponentFixture<BorrowingDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowingDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(BorrowingDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
