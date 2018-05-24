import { Component, OnInit, Injectable } from '@angular/core';
import { InstallmentServiceService } from '../installment-service.service';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.scss']
})
export class InstallmentComponent implements OnInit {
 
  constructor(private consume : InstallmentServiceService) { }

  public mydata: String;
  public values: any[];
  private selectedUserIdx:number = 0;
  public id:string;

  get valArr(){
    return this.values;
  }

  ngOnInit() {
     this.loadData();
     console.log('component loaded', this.values);    
  }

  test(evetn){
    console.log('triggered');
  }
 
  selectUser(idx){
    console.log('selecting user', idx);
    this.selectedUserIdx = idx;
    console.log(this.selectedUser().accno);
    this.id = this.selectedUser().accno;
    // localStorage.setItem("userid","6");
  }
  


  selectedUser(){
    return this.values[this.selectedUserIdx];
  }


  loadData(){
    console.log('loading data');
    this.consume.getAll<any[]>().subscribe((data : any[])  => this.values = data, error => () => 
    {
       console.log(error);
    },() =>
    {
       console.log('completed');
       this.mydata = JSON.stringify(this.values);
       console.log(this.mydata);
    });

  }

  adduser()
  {
      //var uid = localStorage.getItem("userid");
      var instal = {"userid":"uid","object":"", "serialno":"","amount":"","years":"","downpayment":"","intrate":"","amountpermonth":"","amountpayble":""};
      this.values.push(instal);
      this.selectUser(this.values.length - 1);
      console.log('add user method');

  }


  
  getLoggedInUser(){
    return window.localStorage.getItem('uid');
  }
  saveUser(e){
    // e.preventDefaults();
    // this.consume.createacc(this.values);
 
     this.consume.createinstallment<any[]>(this.values).subscribe((data : any[])  => this.values = data, error => () => 
     {
        console.log(error);
     },() =>
     {
        console.log('completed');
        this.mydata = JSON.stringify(this.values);
        console.log(this.mydata);
     });
 
   }

  //  function calculate(amount:number, downpayment:number) {
     
  //  } 
//    calculate()
// {
//   var no1 = 10;
//   var no2 = 20;
//   var sum = no1 + no2;
//   return sum;
}          
