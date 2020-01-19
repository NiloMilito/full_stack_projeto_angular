import * as tslib_1 from "tslib";
import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
let CorDirective = class CorDirective {
    constructor(element) {
        this.element = element;
        this.timeout = new EventEmitter();
    }
    set tempo(valor) {
        console.log(valor);
        if (valor) {
            setTimeout(() => {
                this.timeout.emit('timeout' + new Date());
            }, valor);
        }
    }
    mudarBackground() {
        this.element.nativeElement.style.backgroundColor = 'blue';
        this.element.nativeElement.style.color = 'white';
    }
    removerBackground() {
        this.element.nativeElement.style.backgroundColor = 'initial';
        this.element.nativeElement.style.color = this.corTexto || 'initial';
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        console.log(changes);
        if (changes.corTexto) {
            this.element.nativeElement.style.color = changes.corTexto.currentValue;
        }
        // if (changes.timeout) {
        //   setTimeout(() => {
        //     this.timeout.emit('timeout' + new Date());
        //   }, changes.timeout.currentValue);
        // }
    }
};
tslib_1.__decorate([
    Input()
], CorDirective.prototype, "corTexto", void 0);
tslib_1.__decorate([
    Output()
], CorDirective.prototype, "timeout", void 0);
tslib_1.__decorate([
    Input()
], CorDirective.prototype, "tempo", null);
tslib_1.__decorate([
    HostListener('mouseenter')
], CorDirective.prototype, "mudarBackground", null);
tslib_1.__decorate([
    HostListener('mouseleave')
], CorDirective.prototype, "removerBackground", null);
CorDirective = tslib_1.__decorate([
    Directive({
        selector: '[appCor]'
    })
], CorDirective);
export { CorDirective };
//# sourceMappingURL=cor.directive.js.map