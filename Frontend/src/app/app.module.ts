import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BillmanagerComponent } from './billmanager/billmanager.component';
import { AddEditBillsComponent } from './add-edit-bills/add-edit-bills.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
<<<<<<< HEAD
import { OtherbillsComponent } from './otherbills/otherbills.component';
=======
import { GasComponent } from './gas/gas.component';
import { ItempredictionComponent } from './itemprediction/itemprediction.component';
import { PredictionComponent } from './prediction/prediction.component';
import { Solar1Component } from './solar1/solar1.component';
import { Solar2Component } from './solar2/solar2.component';
import { PredictEachItemComponent } from './predict-each-item/predict-each-item.component';
>>>>>>> 65566d321b8ec0942152303509786d42aec7d5da


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BillmanagerComponent,
    AddEditBillsComponent,
    TestComponent,
    Test2Component,
<<<<<<< HEAD
    OtherbillsComponent
=======
    GasComponent,
    ItempredictionComponent,
    PredictionComponent,
    Solar1Component,
    Solar2Component,
    PredictEachItemComponent
>>>>>>> 65566d321b8ec0942152303509786d42aec7d5da
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
