import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';

@IonicPage()
@Component({
  selector: 'page-send-to-user',
  templateUrl: 'send-to-user.html',
})
export class SendToUserPage {
  personId: string;
  message: string;

  avatars = [
    {
      "id":"8f7df3d1-1fc1-4ce8-a45e-d39c3f759b17",
      "name":"Ammar",
      "isActive": false,
      "image": "assets/imgs/avatars/ammar.jpg"
    },
    {
      "id":"12200e47-bb72-47ab-8057-c5d19d230268",
      "name":"Callum",
      "isActive": false,
      "image": "assets/imgs/avatars/callum.jpg"
    },
    {
      "id":"",
      "name":"Carl",
      "isActive": false,
      "image": "assets/imgs/avatars/carl.jpg"
    },
    {
      "id":"26e04475-3607-47df-a80a-2add7a8f5a5c",
      "name":"Daniel",
      "isActive": false,
      "image": "assets/imgs/avatars/daniel.jpg"
    },
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private messageProvider: MessageProvider) {
  }

  broadcastMessage() {
    this.messageProvider.broadcastToPerson(this.personId, this.message);
  }

  onSelect(selectedAvatarId: string) {
    this.avatars.forEach((av) => {
      if (av.id === selectedAvatarId) {
        av.isActive = true;
      }
      else {
        av.isActive = false;
      }
    });

    this.personId = selectedAvatarId;
  }

}
