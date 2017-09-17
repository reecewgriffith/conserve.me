import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainTabsPage } from '../main-tabs/main-tabs';
import { RegisterPage } from '../register/register';
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

  splash = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
       setTimeout(() => {
        this.splash = false;
       }, 4000);
    
     }

  segueToMTabs() {
    this.navCtrl.push(MainTabsPage);
  }

  segueToReg() {
    this.navCtrl.push(RegisterPage);
  }

}
