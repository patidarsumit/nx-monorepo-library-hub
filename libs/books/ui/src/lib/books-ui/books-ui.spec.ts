import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksUi } from './books-ui';

describe('BooksUi', () => {
  let component: BooksUi;
  let fixture: ComponentFixture<BooksUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksUi],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
