"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var SetgoalsComponent = /** @class */ (function () {
    function SetgoalsComponent(router) {
        this.router = router;
        this.istoggled = false;
    }
    SetgoalsComponent.prototype.next = function () {
        this.router.navigate(["dashboard-day1"]);
        // alert("this is clicked");
    };
    SetgoalsComponent.prototype.ngOnInit = function () { };
    SetgoalsComponent.prototype.Clicked = function () {
        if (this.istoggled) {
            this.istoggled = !this.istoggled;
        }
    };
    SetgoalsComponent = __decorate([
        core_1.Component({
            selector: "app-setgoals",
            templateUrl: "./setgoals.component.html",
            styleUrls: ["./setgoals.component.scss"]
        })
    ], SetgoalsComponent);
    return SetgoalsComponent;
}());
exports.SetgoalsComponent = SetgoalsComponent;

//# sourceMappingURL=setgoals.component.js.map
