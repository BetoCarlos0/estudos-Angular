import { Injectable } from '@angular/core';
import { Cep } from '../Cep';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private apiUrl = 'https://viacep.com.br/ws/';

  constructor(private http:HttpClient) { }

  // getCep(): Observable<Cep>{
  //   return this.http.get<Cep>(this.apiUrl);
  // }
  getItem(id: string): Observable<Cep> {
    return this.http.get<Cep>(this.apiUrl + id + '/json/')
  }
}
