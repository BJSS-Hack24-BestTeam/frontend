import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BroadcastPage } from '../broadcast/broadcast';
import { SendToUserPage } from '../send-to-user/send-to-user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  globalBroadcastPage: any;
  sendMessageToPersonPage: any;

  constructor(public navCtrl: NavController) {
    this.globalBroadcastPage = BroadcastPage;
    this.sendMessageToPersonPage = SendToUserPage;
  }

}
