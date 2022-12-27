import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringResourcesComponent } from './monitoring-resources.component';

describe('MonitoringResourcesComponent', () => {
  let component: MonitoringResourcesComponent;
  let fixture: ComponentFixture<MonitoringResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoringResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
