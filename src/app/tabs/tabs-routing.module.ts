import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { Onboarding1Component } from "../onboarding1/onboarding1.component";
import { Onboarding2Component } from "../onboarding2/onboarding2.component";
import { ImportContactsComponent } from "../import-contacts/import-contacts.component";
import { CheckInComponent } from "../check-in/check-in.component";
import { AvatarListComponent } from "../avatar-list/avatar-list.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { DashboardCongratsComponent } from "../dashboard-congrats/dashboard-congrats.component";
import { DashboardDay1Component } from "../dashboard-day1/dashboard-day1.component";
import { DashboardDay6Component } from "../dashboard-day6/dashboard-day6.component";
import { DashboardPostCongratsComponent } from "../dashboard-post-congrats/dashboard-post-congrats.component";
import { ImportsCheckInComponent } from "../imports-check-in/imports-check-in.component";
import { SetgoalsComponent } from "../setgoals/setgoals.component";
import { TopfiveComponent } from "../topfive/topfive.component";
import { OnboardPermissionComponent } from "../onboard-permission/onboard-permission.component"
import { DashboardDay7Component } from "../dashboard-day7/dashboard-day7.component";
const routes: Routes = [
  {
    path: "",
    component: TabsPage,
  },
  {
    path: "avatar-list",
    component: AvatarListComponent,
  },
  {
    path: "check-in",
    component: CheckInComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "dashboard-congrats",
    component: DashboardCongratsComponent,
  },
  {
    path: "dashboard-day1",
    component: DashboardDay1Component,
  },
  {
    path: "dashboard-day6",
    component: DashboardDay6Component,
  },
  {
    path: "dashboard-post-congrats",
    component: DashboardPostCongratsComponent,
  },
  {
    path: "importcontacts",
    component: ImportContactsComponent,
  },
  {
    path: "imports-check-in",
    component: ImportsCheckInComponent,
  },{
    path: "onboard-permission", 
    component: OnboardPermissionComponent
  },
  {
    path: "onboarding1",
    component: Onboarding1Component,
  },
  {
    path: "onboarding2",
    component: Onboarding2Component,
  },
  {
    path: "set-goals",
    component: SetgoalsComponent,
  },
  {
    path: "top-five",
    component: TopfiveComponent,
  },{
    path: "dashboard-day7",
    component: DashboardDay7Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
