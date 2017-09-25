import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bar-horizontal',
  templateUrl: 'bar-horizontal.html',
})
export class BarHorizontalPage {

  @ViewChild(Content) content: Content;
  view: number[] = [700, 300];
  data: any[] = [];
  isRealtime: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  showLegend: boolean;
  interval: number;

  constructor() {
    this.data = this.generateData();
  }

  ionViewDidLoad() {
    this.applyDimensions();
    window.addEventListener('resize', () => {
      this.applyDimensions();
    }, false);
  }

  ionViewDidLeave() {
    clearInterval(this.interval);
    window.removeEventListener('resize');
  }

  toggleRealTime( event: Event ) {
    event.preventDefault();
    this.isRealtime = !this.isRealtime;
    if ( this.isRealtime ) {
      this.interval = setInterval(() => {
        this.updateData();
      }, 1000);
    }else {
      clearInterval(this.interval);
    }
  }

  updateData() {
    this.data = this.generateData();
  }

  applyDimensions() {
    const width = this.content.getContentDimensions().contentWidth - 50;
    const state = width >= 320;
    this.showXAxisLabel = state;
    this.showYAxisLabel = state;
    this.showLegend = state;
    this.view = [width, 300];
  }

  private generateData() {
    return [
      {
        'name': 'Germany',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'United States',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'France',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'United Kingdom',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'Spain',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'Italy',
        'value': Math.floor(10000 + Math.random() * 50000)
      }
    ];
  }

}
