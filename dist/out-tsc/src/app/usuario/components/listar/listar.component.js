import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ListarComponent = class ListarComponent {
    constructor(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.colunas = ['login', 'nome', 'acoes'];
    }
    ngOnInit() {
        this.atualizar();
    }
    ngOnDestroy() {
    }
    atualizar() {
        this.usuarioService.listar()
            .subscribe(usuarios => {
            this.usuarios = usuarios;
        });
    }
    editar({ id }) {
        this.router.navigate(['editar', id]);
    }
    remover({ id }) {
        this.usuarioService.remover(id)
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