import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/confirm-dialog/confirm-dialog.component';
let ListarComponent = class ListarComponent {
    constructor(pacienteService, router, dialog) {
        this.pacienteService = pacienteService;
        this.router = router;
        this.dialog = dialog;
        this.colunas = ['nome', 'email', 'cpf', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'uf', 'acoes'];
        this.result = 0;
    }
    ngOnInit() {
        this.atualizar();
    }
    ngOnDestroy() {
    }
    atualizar() {
        this.pacienteService.listar()
            .subscribe(pacientes => {
            this.pacientes = pacientes;
        });
    }
    editar({ id }) {
        this.router.navigate(['editar', id]);
    }
    remover(id) {
        this.pacienteService.remover(id)
            .subscribe(() => this.atualizar());
    }
    confirmDialog(id) {
        const message = `Tem certeza que deseja excluir?`;
        const dialogData = new ConfirmDialogModel("Confirmar Exclusão", message);
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: "400px",
            data: dialogData
        });
        this.result = id;
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                this.remover(this.result);
            }
        });
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