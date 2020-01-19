import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './components/listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditarMedicoComponent } from './components/editar/editar.component';
import { SharedModule } from '../shared/shared.module';
import { MedicoRoutingModule } from './medico-routing.module';
import { DiretivaExemploComponent } from './components/diretiva-exemplo/diretiva-exemplo.component';
import { PipeExemploComponent } from './components/pipe-exemplo/pipe-exemplo.component';
import { NgContentComponetComponent } from './components/ng-content-componet/ng-content-componet.component';
import { MatNativeDateModule } from '@angular/material';
import { DemoMaterialModule } from '../material-module';
let MedicoModule = class MedicoModule {
};
MedicoModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            ListarComponent,
            EditarMedicoComponent,
            DiretivaExemploComponent,
            PipeExemploComponent,
            NgContentComponetComponent
        ],
        imports: [
            ReactiveFormsModule,
            FormsModule,
            RouterModule,
            MedicoRoutingModule,
            SharedModule,
            MatNativeDateModule,
            DemoMaterialModule,
            CommonModule
        ],
        entryComponents: [NgContentComponetComponent],
        bootstrap: [NgContentComponetComponent],
        providers: []
    })
], MedicoModule);
export { MedicoModule };
//# sourceMappingURL=medico.module.js.map