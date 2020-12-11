"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var angular_1 = require("@ionic/angular");
var core_1 = require("@angular/core");
// import { RouterModule, Routes } from "@angular/router";
var common_1 = require("@angular/common");
// import { Onboarding1Component } from "../onboarding1/onboarding1.component";
// import { Onboarding2Component } from "../onboarding2/onboarding2.component";
// const routes: Routes = [
//   {
//     path: "",
//     component: Onboarding1Component,
//   },
//   {
//     path: "onboarding2",
//     component: Onboarding2Component,
//   },
// ];
var Onboarding1Module = /** @class */ (function () {
    function Onboarding1Module() {
    }
    Onboarding1Module = __decorate([
        core_1.NgModule({
            imports: [angular_1.IonicModule, common_1.CommonModule],
            declarations: []
        })
    ], Onboarding1Module);
    return Onboarding1Module;
}());
exports.Onboarding1Module = Onboarding1Module;

//# sourceMappingURL=onboarding1.module.js.map
