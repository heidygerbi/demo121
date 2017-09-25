import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StackedBarVerticalPage } from './stacked-bar-vertical';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    StackedBarVerticalPage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(StackedBarVerticalPage),
  ],
})
export class StackedBarVerticalPageModule {}
