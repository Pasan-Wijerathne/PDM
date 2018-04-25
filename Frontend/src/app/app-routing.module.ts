import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
import { BroadbandComponent } from './broadband/broadband.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { MysimComponent } from './mysim/mysim.component';
import { TelecomparisonComponent } from './telecomparison/telecomparison.component';
import { ComparisonboardComponent } from './comparisonboard/comparisonboard.component';
import { AddEditElectricityComponent } from './add-edit-electricity/add-edit-electricity.component';
import { AddEditWaterComponent} from './add-edit-water/add-edit-water.component';
import { AddEditTelephoneComponent } from './add-edit-telephone/add-edit-telephone.component';
import { AddEditTelevitionComponent } from './add-edit-televition/add-edit-televition.component';
import { TestimageComponent } from './testimage/testimage.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "home", component : HomeComponent}, 
  {path : "gas", component : GasComponent},
  {path : "itemprediction", component : ItempredictionComponent},
  {path :"prediction", component : PredictionComponent},
  {path : "solar1", component : Solar1Component},
  {path : "solar2", component : Solar2Component},
  {path : "predict-each-item", component : PredictEachItemComponent},
  {path : "television", component : TelevisionComponent},
  {path : "water", component : WaterComponent},
  {path : "insurance", component : InsuranceComponent},
  {path : "installment", component : InstallmentComponent },
  {path : "broadband", component : BroadbandComponent},
  {path : "telephone", component : TelephoneComponent},
  {path : "mysim", component : MysimComponent},
  {path : "telecomparison", component : TelecomparisonComponent},
  {path : "comparisonbroad", component : ComparisonboardComponent },
  {path : "add-edit-electricity", component : AddEditElectricityComponent},
  {path : "add-edit-water",component : AddEditWaterComponent },
  {path : "add-edit-telephone",component : AddEditTelephoneComponent },
  {path : "add-edit-televition",component : AddEditTelevitionComponent },
  {path : "testimage", component : TestimageComponent},
  ];


  
@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
