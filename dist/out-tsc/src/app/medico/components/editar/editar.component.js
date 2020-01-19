import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Validacoes } from '../../../shared/validacoes';
let EditarMedicoComponent = class EditarMedicoComponent {
    constructor(route, formBuilder, router, medicoService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.medicoService = medicoService;
        this.medico = route.snapshot.data.medico;
        this.title = this.medico.id ? 'Atualizar Médico' : 'Cadastrar Médico';
    }
    ngOnInit() {
        this.formulario = this.formBuilder.group({
            nome: [this.medico.nome, Validators.compose([
                    Validators.required,
                    Validators.maxLength(10)
                ])],
            email: [this.medico.email, Validators.compose([
                    Validators.required,
                    Validacoes.ValidaEmail
                ])],
            crm: [this.medico.crm, Validators.compose([
                    Validators.required
                ])],
        });
        this.formulario.valueChanges
            .subscribe((values) => {
            console.log(values);
        });
        this.nome.valueChanges.subscribe(value => {
            if (value && value.length > 3) {
                this.email.setValue(`${value}@empresa.com`);
            }
        });
    }
    get nome() {
        return this.formulario.get('nome');
    }
    get email() {
        return this.formulario.get('email');
    }
    get crm() {
        return this.formulario.get('crm');
    }
    voltar() {
        this.router.navigate(['..']);
    }
    enviar() {
        if (this.formulario.valid) {
            this.medicoService.salvar(this.formulario.value)
                .subscribe(() => this.voltar());
        }
    }
};
EditarMedicoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-editar',
        templateUrl: './editar.component.html',
        styleUrls: ['./editar.component.scss']
    })
], EditarMedicoComponent);
export { EditarMedicoComponent };
//# sourceMappingURL=editar.component.js.map