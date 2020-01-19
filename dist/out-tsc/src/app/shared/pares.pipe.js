import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let ParesPipe = class ParesPipe {
    transform(numeros) {
        return numeros.filter(numero => numero % 2 === 0);
    }
};
ParesPipe = tslib_1.__decorate([
    Pipe({
        name: 'pares'
    })
], ParesPipe);
export { ParesPipe };
//# sourceMappingURL=pares.pipe.js.map