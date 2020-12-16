import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { CallLog, CallLogObject } from "@ionic-native/call-log/ngx";

@Component({
  selector: "app-onboarding2",
  templateUrl: "./onboarding2.component.html",
  styleUrls: ["./onboarding2.component.scss"],
})
export class Onboarding2Component implements OnInit {
  filters: CallLogObject[];

  constructor(private callLog: CallLog, private platform: Platform) {}

  ngOnInit() {}

  getStarted() {
    this.callLog
      .requestReadPermission()
      .then((results) => {
        // alert(" hasReadPermission " + JSON.stringify(results));
      })
      .catch((e) => alert(" requestReadPermission " + JSON.stringify(e)));
  }
}
