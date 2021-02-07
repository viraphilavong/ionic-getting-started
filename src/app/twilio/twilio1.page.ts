import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
declare const sendTwilioMessage: any;
@Component({
  selector: 'twilio1',
  templateUrl: 'twilio1.page.html',
})
export class Twilio1Page {
  loading: boolean;
  textMessage: string;
  textMessage2: string;
  phoneNumber: number;

  constructor() {
  }

  b1disabled() {
    return !this.textMessage;
  }

  b2disabled() {
    return !this.textMessage2 || !this.phoneNumber;
  }

  onClick(index) {
    this.loading = true;
    sendTwilioMessage(
      environment.TWILIO_ACCOUNT_SID, 
      environment.TWILIO_AUTH_TOKEN, 
      environment.TWILIO_NUMBER,
      environment.MY_NUMBER, 
      index == 1  ? this.textMessage : this.textMessage2, 
      this.phoneNumber
    );
    this.reset();
  }

  reset() {
    this.loading = false;
    this.phoneNumber = null;
    this.textMessage = '';
    this.textMessage2 = '';
  }
}
