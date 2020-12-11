"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var DashboardPostCongratsComponent = /** @class */ (function () {
    function DashboardPostCongratsComponent(router) {
        this.router = router;
    }
    DashboardPostCongratsComponent.prototype.next = function () {
        this.router.navigate(["check-in"]);
        // alert("this is clicked");
    };
    DashboardPostCongratsComponent.prototype.ngOnInit = function () { };
    DashboardPostCongratsComponent = __decorate([
        core_1.Component({
            selector: "app-dashboard-post-congrats",
            templateUrl: "./dashboard-post-congrats.component.html",
            styleUrls: ["./dashboard-post-congrats.component.scss"]
        })
    ], DashboardPostCongratsComponent);
    return DashboardPostCongratsComponent;
}());
exports.DashboardPostCongratsComponent = DashboardPostCongratsComponent;

//# sourceMappingURL=dashboard-post-congrats.component.js.map
