import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksDataAccess } from './books-data-access';

describe('BooksDataAccess', () => {
  let component: BooksDataAccess;
  let fixture: ComponentFixture<BooksDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
