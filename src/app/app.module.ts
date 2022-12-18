import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CafeService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {MatRadioModule} from "@angular/material/radio";
import {MatDividerModule} from "@angular/material/divider";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import { TableEditComponent } from './table-edit/table-edit.component';
import { ConsommationEditComponent } from './consommation-edit/consommation-edit.component';
import { ServeurEditComponent } from './serveur-edit/serveur-edit.component';
import { PrinterComponent } from './printer/printer.component';


@NgModule({
  declarations: [
    AppComponent,
    TableEditComponent,
    ConsommationEditComponent,
    ServeurEditComponent,
    PrinterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    MatDividerModule,
    MatMomentDateModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [CafeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
