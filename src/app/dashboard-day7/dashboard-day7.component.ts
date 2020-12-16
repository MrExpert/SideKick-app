import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard-day7",
  templateUrl: "./dashboard-day7.component.html",
  styleUrls: ["./dashboard-day7.component.scss"],
})
export class DashboardDay7Component implements OnInit {
  constructor(private router: Router) {}

  next() {
    this.router.navigate(["check-in"]);
    // alert("this is clicked");
  }

  ngOnInit() {}
}
