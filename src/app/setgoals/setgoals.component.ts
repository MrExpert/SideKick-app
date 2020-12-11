import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-setgoals",
  templateUrl: "./setgoals.component.html",
  styleUrls: ["./setgoals.component.scss"],
})
export class SetgoalsComponent implements OnInit {
  istoggled = false;
  constructor(private router: Router) {}

  next() {
    this.router.navigate(["dashboard"]);
    // alert("this is clicked");
  }

  ngOnInit() {}

  Clicked() {
    if (this.istoggled) {
      this.istoggled = !this.istoggled;
    }
  }
}
