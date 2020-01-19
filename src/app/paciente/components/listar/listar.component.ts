import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../model/paciente';
import { PacienteService } from '../../service/paciente.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public pacientes: Paciente[];
  colunas: string[] = ['nome', 'email', 'cpf', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'uf', 'acoes'];

  result : number = 0;
  
  constructor(private pacienteService: PacienteService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.atualizar();
  }

  ngOnDestroy(): void {
  }

  atualizar(): void {
    this.pacienteService.listar()
      .subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  editar({ id }: Paciente): void {
    this.router.navigate(['editar', id]);
  }

  remover( id: number): void {
    this.pacienteService.remover(id)
      .subscribe(() => this.atualizar());
  }

  confirmDialog(id: number): void {
    const message = `Tem certeza que deseja excluir?`;
 
    const dialogData = new ConfirmDialogModel("Confirmar Exclusão", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    this.result = id;
 
    dialogRef.afterClosed().subscribe(dialogResult => {     
      if (dialogResult){
        this.remover(this.result);
      }
    });
  }
}
