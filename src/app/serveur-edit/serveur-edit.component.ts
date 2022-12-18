import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CafeService } from '../app.service';
import { Serveur } from './../models';

@Component({
  selector: 'app-serveur-edit',
  templateUrl: './serveur-edit.component.html',
  styleUrls: ['./serveur-edit.component.scss']
})
export class ServeurEditComponent implements OnInit {

  form!: FormGroup;

  constructor(private service: CafeService, private fb: FormBuilder, private dialogRef: MatDialogRef<any>) {
    this.form = this.fb.group(new Serveur());
   }

  ngOnInit(): void {
  }


  save(value: any) {
    this.service.createServeur(value).subscribe(_ => this.dialogRef.close())
  }

}
