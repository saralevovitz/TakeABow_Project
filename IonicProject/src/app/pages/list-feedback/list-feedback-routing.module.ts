import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFeedbackPage } from './list-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: ListFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListFeedbackPageRoutingModule {}
