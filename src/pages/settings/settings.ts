import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManureAddPage } from '../manure-add/manure-add';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  addCustomManurePressed() {
    this.navCtrl.push(ManureAddPage);
  }

}
