import { Injectable } from '@angular/core';
import { BaseApiService } from 'src/app/shared/base-api.service';
import { Paciente } from '../model/paciente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends BaseApiService<Paciente>{
  public URL = 'https://viacep.com.br/ws/';
  // https://viacep.com.br/ws/{hcep}/json/ 
  public FIM = "/json/";	

  constructor(httpClient: HttpClient) {
    super(httpClient, 'pacientes');
  }

  buscarCep(cep: any){
    return this.httpClient.get(`${this.URL}${cep}${this.FIM}`);      
  }
  
  
}
