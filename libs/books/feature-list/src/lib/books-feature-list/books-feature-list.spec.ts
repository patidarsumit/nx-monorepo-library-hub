import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksFeatureList } from './books-feature-list';

describe('BooksFeatureList', () => {
  let component: BooksFeatureList;
  let fixture: ComponentFixture<BooksFeatureList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksFeatureList],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksFeatureList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
