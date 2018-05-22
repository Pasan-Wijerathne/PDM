import { Component, OnInit, Injectable } from '@angular/core';
import { error } from 'util';
import { ElectserviceService } from '../electservice.service';

@Component({
  selector: 'app-add-edit-electricity',
  templateUrl: './add-edit-electricity.component.html',
  styleUrls: ['./add-edit-electricity.component.scss']
})
export class AddEditElectricityComponent implements OnInit {

  constructor(private consume : ElectserviceService) { }

  public mydata: String;
  public values: any[];
  private selectedUserIdx:number = 0;
  public id:string;
  //public sideID: number = 0;


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
      var ebill = {"accno":"","date":"","usedunits":"","userid":"","totalamount":""};
      this.values.push(ebill);
      //this.selectUser(this.values.length - 1);
      console.log('add user method');

  }


  
  getLoggedInUser(){
    return window.localStorage.getItem('uid');
  }


  saveUser(e){
   // e.preventDefaults();
   // this.consume.createacc(this.values);

    this.consume.createbill<any[]>(this.values).subscribe((data : any[])  => this.values = data, error => () => 
    {
       console.log(error);
    },() =>
    {
       console.log('completed');
       this.mydata = JSON.stringify(this.values);
       console.log(this.mydata);
    });
    this.adduser();
  }


}
