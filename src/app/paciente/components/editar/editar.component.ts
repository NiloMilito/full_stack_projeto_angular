import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../model/paciente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../service/paciente.service';
import { Validacoes } from 'src/app/shared/validacoes';

interface Endereco {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  uf?: string;
}

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  paciente: Paciente;
  title: string;

  formulario: FormGroup;

  constructor(route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private pacienteService: PacienteService) {
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

  buscarCep(){
    console.log(this.cep.value);
      this.pacienteService.buscarCep(this.cep.value).subscribe((endereco: any) =>{    
          console.log(endereco);
          this.formulario.get('logradouro').setValue(endereco.logradouro);
          this.formulario.get('complemento').setValue(endereco.complemento);
          this.formulario.get('bairro').setValue(endereco.bairro);
          this.formulario.get('uf').setValue(endereco.uf);
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

  voltar(): void {
    this.router.navigate(['./']);
  }

  enviar(): void {
    if (this.formulario.valid) {
      if (this.paciente.id){
        this.pacienteService.atualizar(this.formulario.value)
        .subscribe(() => this.voltar());
      } else {
        this.pacienteService.salvar(this.formulario.value)
        .subscribe(() => this.voltar());
      }
    }
  }

}
