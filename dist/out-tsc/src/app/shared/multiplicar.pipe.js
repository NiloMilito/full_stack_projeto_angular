import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let MultiplicarPipe = class MultiplicarPipe {
    transform(value, multiplicador) {
        console.log(value, multiplicador);
        return value ? value * multiplicador : 0;
    }
};
MultiplicarPipe = tslib_1.__decorate([
    Pipe({
        name: 'multiplicar'
    })
], MultiplicarPipe);
export { MultiplicarPipe };
//# sourceMappingURL=multiplicar.pipe.js.map