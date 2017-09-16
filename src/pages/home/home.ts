import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  presentAlert100pts() {
    let alert = this.alertCtrl.create({
      title: 'Gained 100 Green Karma!',
      subTitle: 'Great Work!',
      buttons: ['Okay!']
    });
    alert.present();
  }

  presentAlert500pts() {
    let alert = this.alertCtrl.create({
      title: 'Gained 500 Green Karma!',
      subTitle: 'Great Work!',
      buttons: ['Okay!']
    });
    alert.present();
  }

  presentAlert1kpts() {
    let alert = this.alertCtrl.create({
      title: 'Gained 1k Green Karma!',
      subTitle: 'Great Work!',
      buttons: ['Okay!']
    });
    alert.present();
  }

  presentAlert200ptsP() {
    let alert = this.alertCtrl.create({
      title: 'Gained 200 Pollute Karma!',
      subTitle: 'We have one planet!',
      buttons: ['I\'ll do better next time.']
    });
    alert.present();
  }
}
