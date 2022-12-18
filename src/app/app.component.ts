import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CafeService } from './app.service';
import { Table, Consommation, Commande, Serveur } from './models';
import { ServeurEditComponent } from './serveur-edit/serveur-edit.component';
import { TableEditComponent } from './table-edit/table-edit.component';
import { ConsommationEditComponent } from './consommation-edit/consommation-edit.component';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { PrinterComponent } from './printer/printer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tables: Table[] = [];
  commandes: Commande[] = [];
  serveurs: Serveur[] = [];
  consommations: Consommation[] = [];

  selectedConsommation: Consommation[] = [];
  newCommand: boolean = false;
  selectedServeur!: Serveur;
  selectedTable!: Table;

  form!: FormGroup;

  constructor(private service: CafeService, private dialog: MatDialog, private fb: FormBuilder) {
    this.getTables();
    this.getServeurs();
    this.getCommandes();
    this.getConsommations();

    this.form = this.fb.group({
      id: null,
      date: new Date(),
      heure: `${(new Date()).getHours()}:${(new Date()).getMinutes()}` ,
      table: this.fb.group({ id: '' }),
      montantTotal: 0,
      lignes: this.fb.array([])
    });
  }

  ajouterLigne(consommation: Consommation) {
    const lignes = this.form.controls['lignes'] as FormArray;
    let lForm = this.fb.group({
      consommation: this.fb.group({id: consommation.id}),
      quantite: 1,
    });
    lignes.push(lForm);
  }

  supprimerLigne(idx: number) {
    let lignes = this.form.controls.lignes as FormArray;
    lignes.removeAt(idx);
  }

  getCommandes() {
    this.service.getCommandes().subscribe(data => this.commandes = data);
  }

  getTables() {
    this.service.getTables().subscribe(data => this.tables = data);
  }

  getServeurs() {
    this.service.getServeurs().subscribe(data => this.serveurs = data);
  }

  getConsommations() {
    this.service.getConsommations().subscribe(data => this.consommations = data);
  }

  ajouterTable() {
    this.dialog.open(TableEditComponent, { minWidth: '300px' }).afterClosed().subscribe(_ => this.getTables())
  }

  ajouterServeur() {
    this.dialog.open(ServeurEditComponent, { minWidth: '300px' }).afterClosed().subscribe(_ => this.getServeurs())
  }

  ajouterConsommation() {
    this.dialog.open(ConsommationEditComponent, { minWidth: '300px' }).afterClosed().subscribe(_ => this.getConsommations())
  }

  ajouterCommande() {
    this.newCommand = true;
  }

  selectConsommation(consommation: Consommation) {
    if (this.selectedConsommation.includes(consommation)) this.selectedConsommation.splice(this.selectedConsommation.indexOf(consommation), 1);
    else this.selectedConsommation.push(consommation);


    this.ajouterLigne(consommation);

    this.observeForm();
  }

  selectTable(table: Table) {
    this.selectedTable = table;
    this.form.get('table')?.patchValue(table);

    this.observeForm();
  }

  observeForm() {
    this.newCommand = (this.selectedConsommation.length > 0) && this.selectedTable != null;
  }

  isSelected(consommation: Consommation): boolean {
    return this.selectedConsommation.includes(consommation);
  }

  isSelectedTable(table: Table): boolean {
    return this.selectedTable == table;
  }

  isSelectedServeur(serveur: Serveur): boolean {
    return this.selectedServeur == serveur;
  }

  creerCommande(commande: Commande) {
    console.log(commande);

    this.service.createCommande(commande).subscribe(_ => {
      this.getCommandes();

      this.newCommand = false;
    });
  }

  imprimerCommande(commande: Commande) {

    let lignes = commande.lignes || [];
    lignes.map(it => {
      it.consommation = this.consommations.find(c => c.id == it.consommation?.id)
      return it;
    })

    let data = {
      id: commande.id,
      table: this.tables.find(it => it.id === commande.table?.id),
      date: commande.date,
      heure: commande.heure,
      lignes: lignes,
      montantTotal: commande.montantTotal
    }

    console.log(data);

    this.dialog.open(PrinterComponent, {width: '10cm', data});

  }
}
