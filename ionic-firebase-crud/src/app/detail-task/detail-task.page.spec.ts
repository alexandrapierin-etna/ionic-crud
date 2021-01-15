import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailTaskPage } from './detail-task.page';

describe('DetailTaskPage', () => {
  let component: DetailTaskPage;
  let fixture: ComponentFixture<DetailTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
