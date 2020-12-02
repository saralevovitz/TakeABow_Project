import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFeedbacksPage } from './my-feedbacks.page';

const routes: Routes = [
  {
    path: '',
    component: MyFeedbacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFeedbacksPageRoutingModule {}
