import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NormalizedBarVerticalPage } from './normalized-bar-vertical';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    NormalizedBarVerticalPage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(NormalizedBarVerticalPage),
  ],
})
export class NormalizedBarVerticalPageModule {}
