import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-topfive",
  templateUrl: "./topfive.component.html",
  styleUrls: ["./topfive.component.scss"],
})
export class TopfiveComponent implements OnInit {
  constructor(private router: Router) {}

  next() {
    this.router.navigate(["set-goals"]);
    // alert("this is clicked");
  }
  ngOnInit() {}
}
