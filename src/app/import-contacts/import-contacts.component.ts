import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-import-contacts",
  templateUrl: "./import-contacts.component.html",
  styleUrls: ["./import-contacts.component.scss"],
})
export class ImportContactsComponent implements OnInit {
  istoggled = false;
  constructor(private router: Router) {}

  next() {
    this.router.navigate(["top-five"]);
    // alert("this is clicked");
  }

  ngOnInit() {}

  Clicked() {
    if (this.istoggled) {
      this.istoggled = !this.istoggled;
    }
  }
}
