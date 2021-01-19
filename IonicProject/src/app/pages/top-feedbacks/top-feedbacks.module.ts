import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopFeedbacksPageRoutingModule } from './top-feedbacks-routing.module';

import { TopFeedbacksPage } from './top-feedbacks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopFeedbacksPageRoutingModule
  ],
  declarations: [TopFeedbacksPage]
})
export class TopFeedbacksPageModule {}
