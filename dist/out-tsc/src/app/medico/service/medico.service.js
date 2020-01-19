import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BaseApiService } from '../../shared/base-api.service';
let MedicoService = class MedicoService extends BaseApiService {
    constructor(httpClient) {
        super(httpClient, 'medicos');
    }
};
MedicoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], MedicoService);
export { MedicoService };
//# sourceMappingURL=medico.service.js.map