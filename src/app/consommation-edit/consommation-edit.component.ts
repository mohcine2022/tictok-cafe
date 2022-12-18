import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CafeService } from '../app.service';
import { Consommation } from './../models';

@Component({
  selector: 'app-consommation-edit',
  templateUrl: './consommation-edit.component.html',
  styleUrls: ['./consommation-edit.component.scss']
})
export class ConsommationEditComponent implements OnInit {

  form!: FormGroup;

  constructor(private service: CafeService, private fb: FormBuilder, private dialogRef: MatDialogRef<any>) {
    this.form = this.fb.group(new Consommation());
   }

  ngOnInit(): void {
  }


  save(value: any) {
    this.service.createConsommation(value).subscribe(_ => this.dialogRef.close())
  }

}
