import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard-post-congrats",
  templateUrl: "./dashboard-post-congrats.component.html",
  styleUrls: ["./dashboard-post-congrats.component.scss"],
})
export class DashboardPostCongratsComponent implements OnInit {
  constructor(private router: Router) {}

  next() {
    this.router.navigate(["dashboard-day7"]);
    // alert("this is clicked");
  }

  ngOnInit() {}
}
