import * as tslib_1 from "tslib";
import { Component, ViewChildren } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
let NgContentComponetComponent = class NgContentComponetComponent {
    constructor() { }
    someMethod() {
        this.trigger.openMenu();
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    ViewChildren(MatMenuTrigger)
], NgContentComponetComponent.prototype, "trigger", void 0);
NgContentComponetComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ng-content-componet',
        templateUrl: './ng-content-componet.component.html',
        styleUrls: ['./ng-content-componet.component.scss']
    })
], NgContentComponetComponent);
export { NgContentComponetComponent };
//# sourceMappingURL=ng-content-componet.component.js.map