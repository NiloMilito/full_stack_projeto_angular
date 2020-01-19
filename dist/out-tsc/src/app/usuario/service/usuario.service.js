import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BaseApiService } from 'src/app/shared/base-api.service';
let UsuarioService = class UsuarioService extends BaseApiService {
    constructor(httpClient) {
        super(httpClient, 'usuarios');
    }
};
UsuarioService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UsuarioService);
export { UsuarioService };
//# sourceMappingURL=usuario.service.js.map