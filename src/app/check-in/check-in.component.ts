import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-check-in",
  templateUrl: "./check-in.component.html",
  styleUrls: ["./check-in.component.scss"],
})
export class CheckInComponent implements OnInit {
  constructor(private router: Router) {}

  next() {
    this.router.navigate(["imports-check-in"]);
    // alert("this is clicked");
  }

  ngOnInit() {}
}
