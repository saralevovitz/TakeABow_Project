import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopFeedbacksPage } from './top-feedbacks.page';

describe('TopFeedbacksPage', () => {
  let component: TopFeedbacksPage;
  let fixture: ComponentFixture<TopFeedbacksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFeedbacksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopFeedbacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
