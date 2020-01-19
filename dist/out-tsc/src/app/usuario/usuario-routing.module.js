import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { EditarUsuarioComponent } from './components/editar/editar.component';
import { UsuarioResolve } from './service/usuario.resolve';
const routes = [
    {
        component: ListarComponent,
        path: '',
    },
    {
        component: EditarUsuarioComponent,
        path: 'novo',
        resolve: {
            medico: UsuarioResolve,
        }
    },
    {
        component: EditarUsuarioComponent,
        path: 'editarUsuario/:id',
        resolve: {
            medico: UsuarioResolve
        }
    }
];
let UsuarioRoutingModule = class UsuarioRoutingModule {
};
UsuarioRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], UsuarioRoutingModule);
export { UsuarioRoutingModule };
//# sourceMappingURL=usuario-routing.module.js.map