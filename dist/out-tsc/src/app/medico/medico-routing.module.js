import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { EditarMedicoComponent } from './components/editar/editar.component';
import { MedicoResolve } from './service/medico.resolve';
const routes = [
    {
        component: ListarComponent,
        path: '',
    },
    {
        component: EditarMedicoComponent,
        path: 'novo',
        resolve: {
            medico: MedicoResolve,
        }
    },
    {
        component: EditarMedicoComponent,
        path: 'editarMedico/:id',
        resolve: {
            medico: MedicoResolve
        }
    }
];
let MedicoRoutingModule = class MedicoRoutingModule {
};
MedicoRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], MedicoRoutingModule);
export { MedicoRoutingModule };
//# sourceMappingURL=medico-routing.module.js.map