import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';
declare const sendTwilioMessage: any;

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

  maybeNextTime() {
    sendTwilioMessage(
      environment.TWILIO_ACCOUNT_SID, 
      environment.TWILIO_AUTH_TOKEN, 
      environment.TWILIO_NUMBER,
      environment.MY_NUMBER, 
      'Better luck next time!', 
      null
    );
  }

  hired() {
    sendTwilioMessage(
      environment.TWILIO_ACCOUNT_SID, 
      environment.TWILIO_AUTH_TOKEN, 
      environment.TWILIO_NUMBER,
      environment.MY_NUMBER, 
      'Offer incoming!', 
      null
    );
  }
}
