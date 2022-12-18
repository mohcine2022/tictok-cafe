import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Commande, Consommation, Serveur, Table } from './models';

const COMMAND_URL = "/api/commandes";
const SERVEUR_URL = "/api/serveurs";
const CONSOMMATION_URL = "/api/consommations";
const TABLE_URL = "/api/tables";

@Injectable({providedIn: 'root'})
export class CafeService {
  constructor(private _http: HttpClient) { }



  getTables(): Observable<Table[]> {
    return this._http.get<Table[]>(`${TABLE_URL}`);
  }



  getConsommations(): Observable<Consommation[]> {
    return this._http.get<Consommation[]>(`${CONSOMMATION_URL}`);
  }



  getCommandes(): Observable<Commande[]> {
    return this._http.get<Commande[]>(`${COMMAND_URL}`);
  }


  getServeurs(): Observable<Serveur[]> {
    return this._http.get<Serveur[]>(`${SERVEUR_URL}`);
  }


  createTable(table: Table): Observable<Table> {
    return this._http.post<Table>(`${TABLE_URL}`, table);
  }


  createConsommation(consommation: Consommation): Observable<Consommation> {
    return this._http.post<Consommation>(`${CONSOMMATION_URL}`, consommation);
  }


  createCommande(commande: Commande): Observable<Commande> {
    return this._http.post<Commande>(`${COMMAND_URL}`, commande);
  }

  createServeur(serveur: Serveur): Observable<Serveur> {
    return this._http.post<Serveur>(`${SERVEUR_URL}`, serveur);
  }
}
