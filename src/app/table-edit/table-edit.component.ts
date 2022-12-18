import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CafeService } from './../app.service';
import { Serveur } from './../models';

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit {

  form!: FormGroup;
  serveurs: Serveur[] = [];

  constructor(private service: CafeService, private fb: FormBuilder, private dialogRef: MatDialogRef<any>) {
    this.form = this.fb.group({
      id: null,
      numeroTable: '',
      serveur: this.fb.group({id: null})
    });

    this.service.getServeurs().subscribe(data => this.serveurs = data);
   }

  ngOnInit(): void {
  }


  save(value: any) {
    this.service.createTable(value).subscribe(_ => this.dialogRef.close())
  }

}
