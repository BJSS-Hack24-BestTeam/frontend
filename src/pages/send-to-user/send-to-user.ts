import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';

@IonicPage()
@Component({
  selector: 'page-send-to-user',
  templateUrl: 'send-to-user.html',
})
export class SendToUserPage {
  personId: number;
  message: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private messageProvider: MessageProvider) {
  }

  broadcastMessage() {
    this.messageProvider.broadcastToPerson(this.personId, this.message);
  }

}
