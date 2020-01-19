import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './components/editar/editar.component';
import { ListarComponent } from './components/listar/listar.component';
import { NgContentComponet } from './components/ng-content-componet/ng-content-componet.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PacienteRoutingModule } from './paciente-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DemoMaterialModule } from '../material-module';
import { MatNativeDateModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { PacienteResolve } from './service/paciente.resolve';
let PacienteModule = class PacienteModule {
};
PacienteModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            ListarComponent,
            EditarComponent,
            NgContentComponet
        ],
        imports: [
            ReactiveFormsModule,
            FormsModule,
            RouterModule,
            PacienteRoutingModule,
            SharedModule,
            MatNativeDateModule,
            DemoMaterialModule,
            CommonModule,
            MatButtonModule, MatDialogModule
        ],
        exports: [
            MatButtonModule, MatDialogModule
        ],
        entryComponents: [NgContentComponet],
        bootstrap: [NgContentComponet],
        providers: [PacienteResolve]
    })
], PacienteModule);
export { PacienteModule };
//# sourceMappingURL=paciente.module.js.map