import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyInvitationsPage } from './my-invitations.page';

const routes: Routes = [
  {
    path: '',
    component: MyInvitationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyInvitationsPageRoutingModule {}
