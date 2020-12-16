import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-onboard-permission',
  templateUrl: './onboard-permission.component.html',
  styleUrls: ['./onboard-permission.component.scss'],
})
export class OnboardPermissionComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  next() {
    this.router.navigate(["importcontacts"]);
  }
}
