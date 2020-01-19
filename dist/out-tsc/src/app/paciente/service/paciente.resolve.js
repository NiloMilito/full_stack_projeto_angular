import * as tslib_1 from "tslib";
import { Paciente } from '../model/paciente';
import { Injectable } from '@angular/core';
let PacienteResolve = class PacienteResolve {
    constructor(pacienteService) {
        this.pacienteService = pacienteService;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        debugger;
        if (id) {
            return this.pacienteService.consultar(id);
        }
        return new Paciente();
    }
};
PacienteResolve = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], PacienteResolve);
export { PacienteResolve };
//# sourceMappingURL=paciente.resolve.js.map