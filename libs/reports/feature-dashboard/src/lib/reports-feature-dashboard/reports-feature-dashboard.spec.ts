import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportsFeatureDashboard } from './reports-feature-dashboard';

describe('ReportsFeatureDashboard', () => {
  let component: ReportsFeatureDashboard;
  let fixture: ComponentFixture<ReportsFeatureDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsFeatureDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsFeatureDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
