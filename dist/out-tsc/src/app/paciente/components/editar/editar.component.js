import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Validacoes } from 'src/app/shared/validacoes';
let EditarComponent = class EditarComponent {
    constructor(route, formBuilder, router, pacientService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.pacientService = pacientService;
        this.paciente = route.snapshot.data.paciente;
        this.title = this.paciente.id ? 'Atualizar Paciente' : 'Cadastrar Paciente';
    }
    ngOnInit() {
        this.formulario = this.formBuilder.group({
            nome: [this.paciente.nome, Validators.compose([
                    Validators.required,
                    Validators.maxLength(10)
                ])],
            email: [this.paciente.email, Validators.compose([
                    Validators.required,
                    Validacoes.ValidaEmail
                ])],
            cpf: [this.paciente.cpf, Validators.compose([
                    Validators.required
                ])],
            telefone: [this.paciente.telefone, Validators.compose([
                    Validators.required
                ])],
            cep: [this.paciente.cep, Validators.compose([
                    Validators.required
                ])],
            logradouro: [this.paciente.logradouro, Validators.compose([
                    Validators.required
                ])],
            complemento: [this.paciente.complemento, Validators.compose([
                    Validators.required
                ])],
            bairro: [this.paciente.bairro, Validators.compose([
                    Validators.required
                ])],
            uf: [this.paciente.uf, Validators.compose([
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
    get id() {
        return this.formulario.get('id');
    }
    get nome() {
        return this.formulario.get('nome');
    }
    get email() {
        return this.formulario.get('email');
    }
    get cpf() {
        return this.formulario.get('cpf');
    }
    get telefone() {
        return this.formulario.get('telefone');
    }
    get cep() {
        return this.formulario.get('cep');
    }
    get logradouro() {
        return this.formulario.get('logradouro');
    }
    get complemento() {
        return this.formulario.get('complemento');
    }
    get bairro() {
        return this.formulario.get('bairro');
    }
    get uf() {
        return this.formulario.get('uf');
    }
    voltar() {
        this.router.navigate(['./listar']);
    }
    enviar() {
        if (this.formulario.valid) {
            this.pacientService.salvar(this.formulario.value)
                .subscribe(() => this.voltar());
        }
    }
};
EditarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-editar',
        templateUrl: './editar.component.html',
        styleUrls: ['./editar.component.scss']
    })
], EditarComponent);
export { EditarComponent };
//# sourceMappingURL=editar.component.js.map