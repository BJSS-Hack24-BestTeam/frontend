import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendToUserPage } from './send-to-user';

@NgModule({
  declarations: [
    SendToUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SendToUserPage),
  ],
})
export class SendToUserPageModule {}
