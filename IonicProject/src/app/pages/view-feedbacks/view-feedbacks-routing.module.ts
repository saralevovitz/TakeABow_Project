import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewFeedbacksPage } from './view-feedbacks.page';

const routes: Routes = [
  {
    path: '',
    component: ViewFeedbacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewFeedbacksPageRoutingModule {}
