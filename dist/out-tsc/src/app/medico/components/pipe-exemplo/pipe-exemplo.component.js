import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let PipeExemploComponent = class PipeExemploComponent {
    constructor() {
        this.data = new Date();
        this.numeros = [1, 2, 3, 4];
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input()
], PipeExemploComponent.prototype, "medicos", void 0);
PipeExemploComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pipe-exemplo',
        templateUrl: './pipe-exemplo.component.html',
        styleUrls: ['./pipe-exemplo.component.scss']
    })
], PipeExemploComponent);
export { PipeExemploComponent };
//# sourceMappingURL=pipe-exemplo.component.js.map