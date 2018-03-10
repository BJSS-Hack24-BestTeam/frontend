import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { MessageProvider } from '../../providers/message/message';

@IonicPage()
@Component({
  selector: 'page-broadcast',
  templateUrl: 'broadcast.html',
})
export class BroadcastPage {
  
  message: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpClient: HttpClient,
    private messageProvider: MessageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BroadcastPage');
  }

  broadcastMessage() {
    this.messageProvider.broadcastGlobally(this.message);
  }

}
