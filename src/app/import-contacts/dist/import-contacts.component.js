"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ImportContactsComponent = /** @class */ (function () {
    function ImportContactsComponent(router) {
        this.router = router;
        this.istoggled = false;
    }
    ImportContactsComponent.prototype.next = function () {
        this.router.navigate(["top-five"]);
        // alert("this is clicked");
    };
    ImportContactsComponent.prototype.ngOnInit = function () { };
    ImportContactsComponent.prototype.Clicked = function () {
        if (this.istoggled) {
            this.istoggled = !this.istoggled;
        }
    };
    ImportContactsComponent = __decorate([
        core_1.Component({
            selector: "app-import-contacts",
            templateUrl: "./import-contacts.component.html",
            styleUrls: ["./import-contacts.component.scss"]
        })
    ], ImportContactsComponent);
    return ImportContactsComponent;
}());
exports.ImportContactsComponent = ImportContactsComponent;

//# sourceMappingURL=import-contacts.component.js.map
