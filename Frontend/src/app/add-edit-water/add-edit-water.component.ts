import { Component, OnInit } from '@angular/core';
import { error } from 'util';
import { ElectserviceService } from '../electservice.service';

@Component({
  selector: 'app-add-edit-water',
  templateUrl: './add-edit-water.component.html',
  styleUrls: ['./add-edit-water.component.scss']
})
export class AddEditWaterComponent implements OnInit {

  constructor(private consume : ElectserviceService) { }

  public mydata: string;
  private values: any[];
  private selectedUserIdx:number = 0;
  public id:string;

  ngOnInit() {
    console.log('component loaded');
    this.loadData();

  }

  test(event){
    console.log.apply('triggered');
  }

  selectUser(idx){
    console.log('selecting user', idx);
    this.selectedUserIdx = idx;
    console.log(this.selectedUser().accno);
    this.id = this.selectedUser().accno;
    //localStorage.setItem("userid","6");
  }


  selectedUser(){
    return this.values[this.selectedUserIdx];
  }


  loadData(){
    console.log('loading data');
    this.consume.getAllW<any[]>().subscribe((data : any[])  => this.values = data, error => () => 
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
      this.selectUser(this.values.length - 1);
      console.log('add user method');

  }


  
  getLoggedInUser(){
    return window.localStorage.getItem('uid');
  }


  saveUser(e){
   // e.preventDefaults();
   // this.consume.createacc(this.values);

    this.consume.creatwbill<any[]>(this.values).subscribe((data : any[])  => this.values = data, error => () => 
    {
       console.log(error);
    },() =>
    {
       console.log('completed');
       this.mydata = JSON.stringify(this.values);
       console.log(this.mydata);
    });

  }

}
