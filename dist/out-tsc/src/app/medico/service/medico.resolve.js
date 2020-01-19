import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Medico } from '../model/medico';
let MedicoResolve = class MedicoResolve {
    constructor(medicoService) {
        this.medicoService = medicoService;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        if (id) {
            return this.medicoService.consultar(id);
        }
        return new Medico();
    }
};
MedicoResolve = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], MedicoResolve);
export { MedicoResolve };
//# sourceMappingURL=medico.resolve.js.map