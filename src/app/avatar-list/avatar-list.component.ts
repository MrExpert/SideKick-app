import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-avatar-list",
  templateUrl: "./avatar-list.component.html",
  styleUrls: ["./avatar-list.component.scss"],
})
export class AvatarListComponent implements OnInit {
  constructor(private router: Router) {}

  next() {
    this.router.navigate(["onboarding1"]);
    // alert("this is clicked");
  }

  ngOnInit() {}
}
