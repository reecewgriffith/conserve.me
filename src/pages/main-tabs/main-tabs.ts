import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ChartsPage } from '../charts/charts';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the MainTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-main-tabs',
  templateUrl: 'main-tabs.html'
})
export class MainTabsPage {

  homeRoot = HomePage
  chartsRoot = ChartsPage
  settingsRoot = SettingsPage


  constructor(public navCtrl: NavController) {}

}
