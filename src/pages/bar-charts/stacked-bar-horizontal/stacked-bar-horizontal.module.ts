import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StackedBarHorizontalPage } from './stacked-bar-horizontal';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    StackedBarHorizontalPage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(StackedBarHorizontalPage),
  ],
})
export class StackedBarHorizontalPageModule {}
