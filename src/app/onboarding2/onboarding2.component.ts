import { Component, OnInit } from '@angular/core';
import { CallLog, CallLogObject } from "@ionic-native/call-log/ngx";

@Component({
  selector: 'app-onboarding2',
  templateUrl: './onboarding2.component.html',
  styleUrls: ['./onboarding2.component.scss'],
})
export class Onboarding2Component implements OnInit {
  
  callLog: CallLog;
  
  constructor( callLog: CallLog  ) { 
    this.callLog = callLog;

  }

  ngOnInit() {}

}
