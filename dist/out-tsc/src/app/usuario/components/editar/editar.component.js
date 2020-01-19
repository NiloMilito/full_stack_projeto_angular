import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Validacoes } from 'src/app/shared/validacoes';
let EditarUsuarioComponent = class EditarUsuarioComponent {
    constructor(route, formBuilder, router, usuarioService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.usuarioService = usuarioService;
        this.usuario = route.snapshot.data.usuario;
        this.title = this.usuario.id ? 'Atualizar Usuário' : 'Cadastrar Usuário';
    }
    ngOnInit() {
        this.formulario = this.formBuilder.group({
            login: [this.usuario.login, Validators.compose([
                    Validators.required,
                    Validators.maxLength(10)
                ])],
            senha: [this.usuario.password, Validators.compose([
                    Validators.required
                ])],
            confirmSenha: [Validators.compose([
                    Validators.required,
                    Validacoes.ValidaSenha
                ])]
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
        return this.formulario.get('login');
    }
    get email() {
        return this.formulario.get('senha');
    }
    voltar() {
        this.router.navigate(['..']);
    }
    enviar() {
        if (this.formulario.valid) {
            this.usuarioService.salvar(this.formulario.value)
                .subscribe(() => this.voltar());
        }
    }
};
EditarUsuarioComponent = tslib_1.__decorate([
    Component({
        selector: 'app-editar',
        templateUrl: './editar.component.html',
        styleUrls: ['./editar.component.scss']
    })
], EditarUsuarioComponent);
export { EditarUsuarioComponent };
//# sourceMappingURL=editar.component.js.map