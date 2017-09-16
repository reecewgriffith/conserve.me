import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainTabsPage } from '../main-tabs/main-tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  segueToMTabs() {
    this.navCtrl.push(MainTabsPage)
  }

}
