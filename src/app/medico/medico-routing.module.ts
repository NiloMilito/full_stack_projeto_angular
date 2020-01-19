import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { EditarMedicoComponent } from './components/editar/editar.component';
import { MedicoResolve } from './service/medico.resolve';

const routes: Routes = [
  {
    component: ListarComponent,
    path: '',
  },
  {
    component: EditarMedicoComponent,
    path: 'novo',
    resolve: {
      medico: MedicoResolve,
    }
  },
  {
    component: EditarMedicoComponent,
    path: 'editarMedico/:id',
    resolve: {
      medico: MedicoResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
