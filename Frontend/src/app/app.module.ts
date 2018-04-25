import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BillmanagerComponent } from './billmanager/billmanager.component';
import { AddEditBillsComponent } from './add-edit-bills/add-edit-bills.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { GasComponent } from './gas/gas.component';
import { ItempredictionComponent } from './itemprediction/itemprediction.component';
import { PredictionComponent } from './prediction/prediction.component';
import { Solar1Component } from './solar1/solar1.component';
import { Solar2Component } from './solar2/solar2.component';
import { PredictEachItemComponent } from './predict-each-item/predict-each-item.component';
import { TelevisionComponent } from './television/television.component';
import { WaterComponent } from './water/water.component';
import { InstallmentComponent } from './installment/installment.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { BroadbandComponent } from './broadband/broadband.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { MysimComponent } from './mysim/mysim.component';
import { TelecomparisonComponent } from './telecomparison/telecomparison.component';
import { ComparisonboardComponent } from './comparisonboard/comparisonboard.component';
import { AddEditElectricityComponent } from './add-edit-electricity/add-edit-electricity.component';
import { AddEditWaterComponent } from './add-edit-water/add-edit-water.component';
import { AddEditTelephoneComponent } from './add-edit-telephone/add-edit-telephone.component';
import { AddEditTelevitionComponent } from './add-edit-televition/add-edit-televition.component';
import { TestimageComponent } from './testimage/testimage.component';
import { HomeGardenComponent } from './home-garden/home-garden.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BillmanagerComponent,
    AddEditBillsComponent,


    GasComponent,
    ItempredictionComponent,
    PredictionComponent,
    Solar1Component,
    Solar2Component,
    PredictEachItemComponent,
    TelevisionComponent,
    WaterComponent,
    InstallmentComponent,
    InsuranceComponent,
    BroadbandComponent,
    TelephoneComponent,
    MysimComponent,
    TelecomparisonComponent,
    ComparisonboardComponent,
    AddEditElectricityComponent,
    AddEditWaterComponent,
    AddEditTelephoneComponent,
    AddEditTelevitionComponent,
    TestimageComponent,
    HomeGardenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
