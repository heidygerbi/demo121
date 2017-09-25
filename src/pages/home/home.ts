import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    private navCtrl: NavController
  ) {}

  goToPage(page: string) {
    this.navCtrl.push(page);
  }

}
