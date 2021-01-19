import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListFeedbackPageRoutingModule } from './list-feedback-routing.module';

import { ListFeedbackPage } from './list-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFeedbackPageRoutingModule
  ],
  declarations: [ListFeedbackPage]
})
export class ListFeedbackPageModule {}
