import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard-congrats",
  templateUrl: "./dashboard-congrats.component.html",
  styleUrls: ["./dashboard-congrats.component.scss"],
})
export class DashboardCongratsComponent implements OnInit {
  constructor(private router: Router) {}

  next() {
    this.router.navigate(["dashboard-post-congrats"]);
    // alert("this is clicked");
  }

  ngOnInit() {}
}
