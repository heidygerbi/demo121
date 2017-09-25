import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupBarHorizontalPage } from './group-bar-horizontal';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    GroupBarHorizontalPage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(GroupBarHorizontalPage),
  ],
})
export class GroupBarHorizontalPageModule {}
