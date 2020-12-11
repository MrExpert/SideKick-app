import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-imports-check-in",
  templateUrl: "./imports-check-in.component.html",
  styleUrls: ["./imports-check-in.component.scss"],
})
export class ImportsCheckInComponent implements OnInit {
  constructor(private router: Router) {}

  next() {
    this.router.navigate([""]);
    // alert("this is clicked");
  }

  ngOnInit() {}
}
