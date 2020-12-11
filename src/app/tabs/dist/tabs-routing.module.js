"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var onboarding1_component_1 = require("../onboarding1/onboarding1.component");
var onboarding2_component_1 = require("../onboarding2/onboarding2.component");
var import_contacts_component_1 = require("../import-contacts/import-contacts.component");
var check_in_component_1 = require("../check-in/check-in.component");
var avatar_list_component_1 = require("../avatar-list/avatar-list.component");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var dashboard_congrats_component_1 = require("../dashboard-congrats/dashboard-congrats.component");
var dashboard_day1_component_1 = require("../dashboard-day1/dashboard-day1.component");
var dashboard_day6_component_1 = require("../dashboard-day6/dashboard-day6.component");
var dashboard_post_congrats_component_1 = require("../dashboard-post-congrats/dashboard-post-congrats.component");
var imports_check_in_component_1 = require("../imports-check-in/imports-check-in.component");
var setgoals_component_1 = require("../setgoals/setgoals.component");
var topfive_component_1 = require("../topfive/topfive.component");
var routes = [
    {
        path: "",
        component: onboarding1_component_1.Onboarding1Component
    },
    {
        path: "avatar-list",
        component: avatar_list_component_1.AvatarListComponent
    },
    {
        path: "check-in",
        component: check_in_component_1.CheckInComponent
    },
    {
        path: "dashboard",
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: "dashboard-congrats",
        component: dashboard_congrats_component_1.DashboardCongratsComponent
    },
    {
        path: "dashboard-day1",
        component: dashboard_day1_component_1.DashboardDay1Component
    },
    {
        path: "dashboard-day6",
        component: dashboard_day6_component_1.DashboardDay6Component
    },
    {
        path: "dashboard-post-congrats",
        component: dashboard_post_congrats_component_1.DashboardPostCongratsComponent
    },
    {
        path: "importcontacts",
        component: import_contacts_component_1.ImportContactsComponent
    },
    {
        path: "imports-check-in",
        component: imports_check_in_component_1.ImportsCheckInComponent
    },
    {
        path: "onboarding1",
        component: onboarding1_component_1.Onboarding1Component
    },
    {
        path: "onboarding2",
        component: onboarding2_component_1.Onboarding2Component
    },
    {
        path: "set-goals",
        component: setgoals_component_1.SetgoalsComponent
    },
    {
        path: "top-five",
        component: topfive_component_1.TopfiveComponent
    },
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
exports.TabsPageRoutingModule = TabsPageRoutingModule;

//# sourceMappingURL=tabs-routing.module.js.map
