import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BillmanagerComponent } from './billmanager/billmanager.component';
import { AddEditBillsComponent } from './add-edit-bills/add-edit-bills.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { GasComponent } from './gas/gas.component';
import { ItempredictionComponent } from './itemprediction/itemprediction.component';
import { PredictionComponent } from './prediction/prediction.component';
import { Solar1Component } from './solar1/solar1.component';
import { Solar2Component } from './solar2/solar2.component';
import { PredictEachItemComponent } from './predict-each-item/predict-each-item.component';
import { TelevisionComponent } from './television/television.component';
import { WaterComponent } from './water/water.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InstallmentComponent } from './installment/installment.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "billmanager", component : BillmanagerComponent},
  {path : "home", component : HomeComponent},
  {path : "add-edit-bills", component : AddEditBillsComponent} ,  
  {path : "test", component : TestComponent},
  {path : "test2", component :Test2Component},
  {path : "gas", component : GasComponent},
  {path : "itemprediction", component : ItempredictionComponent},
  {path :"prediction", component : PredictionComponent},
  {path : "solar1", component : Solar1Component},
  {path : "solar2", component : Solar2Component},
  {path : "predict-each-item", component : PredictEachItemComponent},
  {path : "television", component : TelevisionComponent},
  {path : "water", component : WaterComponent},
  {path : "insurance", component : InsuranceComponent},
  {path : "installment", component : InstallmentComponent }

  ];


  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
