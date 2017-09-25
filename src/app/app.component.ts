import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = 'HomePage';
  currentPage: string;
  @ViewChild(Nav) navMaster: Nav;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen
  ) {
    this.currentPage = 'Homepage';
    this.platform.ready()
    .then(() => {
      this.initApp();
    });
  }

  private initApp() {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }

  goToPage(page: string) {
    this.currentPage = page;
    this.navMaster.setRoot(page);
  }

  isActive(page: string) {
    return page === this.currentPage;
  }
}

