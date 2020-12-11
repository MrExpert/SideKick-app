import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard-day6",
  templateUrl: "./dashboard-day6.component.html",
  styleUrls: ["./dashboard-day6.component.scss"],
})
export class DashboardDay6Component implements OnInit {
  constructor(private router: Router) {}

  next() {
    this.router.navigate(["dashboard-congrats"]);
    // alert("this is clicked");
  }

  ngOnInit() {}
}
