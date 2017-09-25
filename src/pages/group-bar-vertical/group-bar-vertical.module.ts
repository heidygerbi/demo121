import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupBarVerticalPage } from './group-bar-vertical';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    GroupBarVerticalPage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(GroupBarVerticalPage),
  ],
})
export class GroupBarVerticalPageModule {}
