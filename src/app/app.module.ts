import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MedicoModule} from './medico/medico.module';
import {PacienteModule} from './paciente/paciente.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent, 
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MedicoModule,
    PacienteModule,
    UsuarioModule
  ],  
  providers: [],
  entryComponents: [ConfirmDialogComponent], 
  bootstrap: [AppComponent]
})

export class AppModule { }
