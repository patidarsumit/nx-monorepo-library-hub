import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksFeatureDetail } from './books-feature-detail';

describe('BooksFeatureDetail', () => {
  let component: BooksFeatureDetail;
  let fixture: ComponentFixture<BooksFeatureDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksFeatureDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksFeatureDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
