import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let FiltroPipe = class FiltroPipe {
    transform(medicos, filtro) {
        if (filtro) {
            return medicos
                .filter(medico => medico.nome.indexOf(filtro) > -1);
        }
        return medicos;
    }
};
FiltroPipe = tslib_1.__decorate([
    Pipe({
        name: 'filtro'
    })
], FiltroPipe);
export { FiltroPipe };
//# sourceMappingURL=filtro.pipe.js.map