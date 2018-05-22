import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


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
import { MedicineComponent } from './medicine/medicine.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ElectricEqComponent } from './electric-eq/electric-eq.component';
import { SearchsimComponent } from './searchsim/searchsim.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewbillsComponent } from './viewbills/viewbills.component';
import { ConsumsService } from './consums.service';
import { ElectricitycomparisonComponent } from './electricitycomparison/electricitycomparison.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BannerComponent } from './layout/banner/banner.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Test2Component } from './test2/test2.component';
import { ElectricEqService } from './electric-eq-service';
import { Watercomservice} from './watercomservice';
import { BroadbandinfoComponent } from './broadbandinfo/broadbandinfo.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UsrUtilService } from './usr-util.service';
import { EleCompaService } from './ele-compa.service';
import { ElectserviceService } from './electservice.service';
import { WateserviceService } from './wateservice.service';



@NgModule({

  declarations: 
  [
    AppComponent,
    HomeComponent,
    LoginComponent,
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
    MedicineComponent,
    VehicleComponent,
    ElectricEqComponent,
    SearchsimComponent,
    ViewbillsComponent,
    ElectricitycomparisonComponent,
    SidebarComponent,
    BannerComponent,
    FooterComponent,
    Test2Component,
    BroadbandinfoComponent,
    CreateuserComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],


  providers: [[ElectserviceService],[ConsumsService],[Watercomservice],[ElectricEqService],[UsrUtilService],[EleCompaService],[WateserviceService]],


  bootstrap: [AppComponent]
})
export class AppModule { }
