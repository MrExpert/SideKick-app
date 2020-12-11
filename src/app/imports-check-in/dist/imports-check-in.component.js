"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ImportsCheckInComponent = /** @class */ (function () {
    function ImportsCheckInComponent(router) {
        this.router = router;
    }
    ImportsCheckInComponent.prototype.next = function () {
        this.router.navigate([""]);
        // alert("this is clicked");
    };
    ImportsCheckInComponent.prototype.ngOnInit = function () { };
    ImportsCheckInComponent = __decorate([
        core_1.Component({
            selector: "app-imports-check-in",
            templateUrl: "./imports-check-in.component.html",
            styleUrls: ["./imports-check-in.component.scss"]
        })
    ], ImportsCheckInComponent);
    return ImportsCheckInComponent;
}());
exports.ImportsCheckInComponent = ImportsCheckInComponent;

//# sourceMappingURL=imports-check-in.component.js.map
