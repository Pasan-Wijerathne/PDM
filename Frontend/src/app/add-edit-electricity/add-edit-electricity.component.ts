import { Component, OnInit, Injectable } from '@angular/core';
import {ConsumsService} from '../consums.service';
import { error } from 'util';

@Component({
  selector: 'app-add-edit-electricity',
  templateUrl: './add-edit-electricity.component.html',
  styleUrls: ['./add-edit-electricity.component.scss']
})
export class AddEditElectricityComponent implements OnInit {

  constructor(private consume : ConsumsService) { 
  }

  public mydata: string;
  private values:any[];
  private compo:number = 0;

  
  private testW:string = "test";


  get valArr(){
    return this.values;
  }

  ngOnInit() {

    //this.values = [{"no":1,"accno":"765","usedunits":545455,"userid":"245","date":"2018-04-04","totalamount":454,"addimage":null}];
     this.loadData();
    console.log('component loaded', this.values);    
  }

  test(evetn){
    console.log('triggered');
  }


  selectRow(index){
    this.compo = index;
  }

  // addBill(){
  //   var newBill = {"no":1,"accno":"0","usedunits":0,"userid":"0","date":"2018-04-04","totalamount":0,"addimage":null};
  //   this.values.push(newBill);
  //   this.compo = this.values.length - 1;
  // }

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

  saveAll()
  {
    this.consume.saveAllEB<any[]>(this.values).subscribe((data : any[])  => this.values = data, error => () => 
    {
       console.log(error);
    },() =>
    {
       console.log('completed');
       this.mydata = JSON.stringify(this.values);
       console.log(this.mydata);
    });


    // this.loadData();
    
  }

  // createbill()
  // {
  //   this.consume.saveAllEB(this.values).subscribe(
  //     data=>{
  //         console.log(data)
  //     },
  //     error=>
  //     {
  //       console.log(error);
  //     }
  //   )
  // }

  /*
  deletebill()
  {
    this.consume.deletebill(values.).subscribe((data : any[]) =>{
 
    }

  }

  */

}
