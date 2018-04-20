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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BillmanagerComponent,
    AddEditBillsComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
