import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardPostCongratsComponent } from './dashboard-post-congrats.component';

describe('DashboardPostCongratsComponent', () => {
  let component: DashboardPostCongratsComponent;
  let fixture: ComponentFixture<DashboardPostCongratsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPostCongratsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPostCongratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
