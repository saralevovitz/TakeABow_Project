import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListFeedbackPage } from './list-feedback.page';

describe('ListFeedbackPage', () => {
  let component: ListFeedbackPage;
  let fixture: ComponentFixture<ListFeedbackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFeedbackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListFeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
