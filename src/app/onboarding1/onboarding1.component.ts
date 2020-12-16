import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-onboarding1",
  templateUrl: "./onboarding1.component.html",
  styleUrls: ["./onboarding1.component.scss"],
})
export class Onboarding1Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  continue() {
    this.router.navigate(["onboard-permission"]);
    // alert("this is clicked");
  }
}
