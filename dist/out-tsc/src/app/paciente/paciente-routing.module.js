import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditarComponent } from './components/editar/editar.component';
import { PacienteResolve } from './service/paciente.resolve';
import { ListarComponent } from './components/listar/listar.component';
const routes = [
    {
        component: ListarComponent,
        path: 'listar',
    },
    {
        component: EditarComponent,
        path: 'novo',
        resolve: {
            paciente: PacienteResolve,
        }
    },
    {
        component: EditarComponent,
        path: 'editar/:id',
        resolve: {
            paciente: PacienteResolve
        }
    }
];
let PacienteRoutingModule = class PacienteRoutingModule {
};
PacienteRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], PacienteRoutingModule);
export { PacienteRoutingModule };
//# sourceMappingURL=paciente-routing.module.js.map