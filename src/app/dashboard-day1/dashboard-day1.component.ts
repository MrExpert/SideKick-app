import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard-day1",
  templateUrl: "./dashboard-day1.component.html",
  styleUrls: ["./dashboard-day1.component.scss"],
})
export class DashboardDay1Component implements OnInit {
  constructor(private router: Router) {}

  next() {
    this.router.navigate(["dashboard-day6"]);
    // alert("this is clicked");
  }

  ngOnInit() {}
}
