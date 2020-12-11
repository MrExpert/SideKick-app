"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Onboarding2Component = /** @class */ (function () {
    function Onboarding2Component(callLog, platform, router) {
        this.callLog = callLog;
        this.platform = platform;
        this.router = router;
    }
    Onboarding2Component.prototype.ngOnInit = function () { };
    Onboarding2Component.prototype.getStarted = function () {
        this.callLog
            .requestReadPermission()
            .then(function (results) {
            // alert(" hasReadPermission " + JSON.stringify(results));
        })["catch"](function (e) { return alert(" requestReadPermission " + JSON.stringify(e)); });
        this.router.navigate(["importcontacts"]);
    };
    Onboarding2Component = __decorate([
        core_1.Component({
            selector: "app-onboarding2",
            templateUrl: "./onboarding2.component.html",
            styleUrls: ["./onboarding2.component.scss"]
        })
    ], Onboarding2Component);
    return Onboarding2Component;
}());
exports.Onboarding2Component = Onboarding2Component;

//# sourceMappingURL=onboarding2.component.js.map
