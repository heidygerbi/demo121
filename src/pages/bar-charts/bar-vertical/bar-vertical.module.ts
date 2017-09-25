import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarVerticalPage } from './bar-vertical';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    BarVerticalPage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(BarVerticalPage),
  ],
})
export class BarVerticalPageModule {}
