import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewFeedbacksPageRoutingModule } from './view-feedbacks-routing.module';

import { ViewFeedbacksPage } from './view-feedbacks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewFeedbacksPageRoutingModule
  ],
  declarations: [ViewFeedbacksPage]
})
export class ViewFeedbacksPageModule {}
