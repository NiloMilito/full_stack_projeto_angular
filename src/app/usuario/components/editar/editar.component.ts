import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { Validacoes } from 'src/app/shared/validacoes';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario;
  title: string;

  formulario: FormGroup;

  constructor(route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private usuarioService: UsuarioService) {
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

  voltar(): void {
    this.router.navigate(['..']);
  }

  enviar(): void {
    if (this.formulario.valid) {
      this.usuarioService.salvar(this.formulario.value)
        .subscribe(() => this.voltar());
    }
  }

}
