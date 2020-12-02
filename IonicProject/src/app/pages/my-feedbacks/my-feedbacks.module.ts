import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFeedbacksPageRoutingModule } from './my-feedbacks-routing.module';

import { MyFeedbacksPage } from './my-feedbacks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFeedbacksPageRoutingModule
  ],
  declarations: [MyFeedbacksPage]
})
export class MyFeedbacksPageModule {}
