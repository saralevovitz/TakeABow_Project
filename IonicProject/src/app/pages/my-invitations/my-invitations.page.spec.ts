import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyInvitationsPage } from './my-invitations.page';

describe('MyInvitationsPage', () => {
  let component: MyInvitationsPage;
  let fixture: ComponentFixture<MyInvitationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInvitationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyInvitationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
