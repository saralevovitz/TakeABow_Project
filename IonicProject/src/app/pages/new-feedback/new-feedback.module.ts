import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewFeedbackPageRoutingModule } from './new-feedback-routing.module';

import { NewFeedbackPage } from './new-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewFeedbackPageRoutingModule
  ],
  declarations: [NewFeedbackPage]
})
export class NewFeedbackPageModule {}
