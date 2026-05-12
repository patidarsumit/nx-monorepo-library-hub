import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportsDataAccess } from './reports-data-access';

describe('ReportsDataAccess', () => {
  let component: ReportsDataAccess;
  let fixture: ComponentFixture<ReportsDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
