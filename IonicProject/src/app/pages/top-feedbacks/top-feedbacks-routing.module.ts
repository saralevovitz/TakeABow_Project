import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopFeedbacksPage } from './top-feedbacks.page';

const routes: Routes = [
  {
    path: '',
    component: TopFeedbacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopFeedbacksPageRoutingModule {}
