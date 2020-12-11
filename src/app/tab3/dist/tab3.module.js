"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var angular_1 = require("@ionic/angular");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var tab3_page_1 = require("./tab3.page");
var explore_container_module_1 = require("../explore-container/explore-container.module");
var tab3_routing_module_1 = require("./tab3-routing.module");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var dashboard_day1_component_1 = require("../dashboard-day1/dashboard-day1.component");
var dashboard_day6_component_1 = require("../dashboard-day6/dashboard-day6.component");
var dashboard_congrats_component_1 = require("../dashboard-congrats/dashboard-congrats.component");
var imports_check_in_component_1 = require("../imports-check-in/imports-check-in.component");
var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = __decorate([
        core_1.NgModule({
            imports: [
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                explore_container_module_1.ExploreContainerComponentModule,
                router_1.RouterModule.forChild([{ path: '', component: tab3_page_1.Tab3Page }]),
                tab3_routing_module_1.Tab3PageRoutingModule,
            ],
            declarations: [tab3_page_1.Tab3Page, dashboard_component_1.DashboardComponent, dashboard_day1_component_1.DashboardDay1Component,
                dashboard_day6_component_1.DashboardDay6Component, dashboard_congrats_component_1.DashboardCongratsComponent, imports_check_in_component_1.ImportsCheckInComponent]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());
exports.Tab3PageModule = Tab3PageModule;

//# sourceMappingURL=tab3.module.js.map
