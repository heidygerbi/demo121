import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NormalizedBarHorizontalPage } from './normalized-bar-horizontal';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    NormalizedBarHorizontalPage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(NormalizedBarHorizontalPage),
  ],
})
export class NormalizedBarHorizontalPageModule {}
