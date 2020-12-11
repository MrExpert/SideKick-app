import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TabsPageRoutingModule } from "./tabs-routing.module";
import { TabsPage } from "./tabs.page";
import { Onboarding1Component } from "../onboarding1/onboarding1.component";
import { Onboarding2Component } from "../onboarding2/onboarding2.component";

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule],
  declarations: [TabsPage, Onboarding1Component, Onboarding2Component],
})
export class TabsPageModule {}
