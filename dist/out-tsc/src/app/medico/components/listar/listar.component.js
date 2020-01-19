import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ListarComponent = class ListarComponent {
    constructor(medicoService, router) {
        this.medicoService = medicoService;
        this.router = router;
        this.colunas = ['nome', 'email', 'crm', 'acoes'];
    }
    ngOnInit() {
        this.atualizar();
    }
    ngOnDestroy() {
    }
    atualizar() {
        this.medicoService.listar()
            .subscribe(medicos => {
            this.medicos = medicos;
        });
    }
    editar({ id }) {
        this.router.navigate(['editar', id]);
    }
    remover({ id }) {
        this.medicoService.remover(id)
            .subscribe(() => this.atualizar());
    }
};
ListarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-listar',
        templateUrl: './listar.component.html',
        styleUrls: ['./listar.component.scss']
    })
], ListarComponent);
export { ListarComponent };
//# sourceMappingURL=listar.component.js.map