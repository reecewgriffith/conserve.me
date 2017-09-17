import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MainTabsPage } from '../main-tabs/main-tabs';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  segueToMTabs() {
    this.navCtrl.setRoot(MainTabsPage);
  }

}
