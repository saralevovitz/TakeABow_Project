import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyInvitationsPageRoutingModule } from './my-invitations-routing.module';

import { MyInvitationsPage } from './my-invitations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyInvitationsPageRoutingModule
  ],
  declarations: [MyInvitationsPage]
})
export class MyInvitationsPageModule {}
