import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
