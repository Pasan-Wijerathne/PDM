import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BillmanagerComponent } from './billmanager/billmanager.component';
import { AddEditBillsComponent } from './add-edit-bills/add-edit-bills.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "billmanager", component : BillmanagerComponent},
  {path : "home", component : HomeComponent},
  {path : "add-edit-bills", component : AddEditBillsComponent} ,  
  {path : "test", component : TestComponent},
  {path : "test2", component :Test2Component},
  ];


  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
