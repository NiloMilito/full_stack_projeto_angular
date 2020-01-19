import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path: 'medicos',
        loadChildren: () => import('./medico/medico.module')
            .then(mod => mod.MedicoModule),
    },
    { path: 'pacientes',
        // children: [
        //   {component, path, children: []}
        // ],
        loadChildren: () => import('./paciente/paciente.module')
            .then(mod => mod.PacienteModule),
    },
    {
        path: 'usuarios',
        loadChildren: () => import('./usuario/usuario.module')
            .then(mod => mod.UsuarioModule),
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map