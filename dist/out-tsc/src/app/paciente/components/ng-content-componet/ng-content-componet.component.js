import * as tslib_1 from "tslib";
import { Component, ViewChildren } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
let NgContentComponet = class NgContentComponet {
    constructor() { }
    someMethod() {
        this.trigger.openMenu();
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    ViewChildren(MatMenuTrigger)
], NgContentComponet.prototype, "trigger", void 0);
NgContentComponet = tslib_1.__decorate([
    Component({
        selector: 'app-ng-content-componet',
        templateUrl: './ng-content-componet.component.html',
        styleUrls: ['./ng-content-componet.component.scss']
    })
], NgContentComponet);
export { NgContentComponet };
//# sourceMappingURL=ng-content-componet.component.js.map