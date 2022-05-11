import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private extratoTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.extratoTransferencia = [];
}
  get transferencias(){
    return this.extratoTransferencia;

  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.adicionaData(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  private adicionaData(transferencia:any){
    transferencia.data = new Date();
  }

}
