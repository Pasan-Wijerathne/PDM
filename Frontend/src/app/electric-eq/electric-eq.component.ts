import { Component, OnInit ,Injectable } from '@angular/core';
import { ElectricEqServiceService } from '../electric-eq-service.service';

@Component({
  selector: 'app-electric-eq',
  templateUrl: './electric-eq.component.html',
  styleUrls: ['./electric-eq.component.scss']
})
export class ElectricEqComponent implements OnInit {

  constructor(private consume : ElectricEqServiceService) { }

  public mydata: string;
  private values:any[];
  private selectedUserIdx:number = 0;

  get valArr(){
    return this.values;
  }

  ngOnInit() 
  {
    console.log('component loaded', this.values); 
  }

  add()
  {

      var usr = {"eq_name":"","manufacturer":"","noofwatts":""," 	noofitems":"","expiredate":"","noofhours":""};
      this.values.push(usr);
      this.selectUser(this.values.length - 1);
      console.log('add user method');

  }


  save(e){

    this.consume.addeq<any[]>(this.values).subscribe((data : any[])  => this.values = data, error => () => 
    {
       console.log(error);
    },() =>
    {
       console.log('completed');
       this.mydata = JSON.stringify(this.values);
       console.log(this.mydata);
    });

  }

  selectUser(idx){
    console.log('selecting user,', idx);
    this.selectedUserIdx = idx;
    console.log(this.selectedUser().name);
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


}
