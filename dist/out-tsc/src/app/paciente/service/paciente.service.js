import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BaseApiService } from 'src/app/shared/base-api.service';
let PacienteService = class PacienteService extends BaseApiService {
    constructor(httpClient) {
        super(httpClient, 'pacientes');
    }
};
PacienteService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], PacienteService);
export { PacienteService };
//# sourceMappingURL=paciente.service.js.map