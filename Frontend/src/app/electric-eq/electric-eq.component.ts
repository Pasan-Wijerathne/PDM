<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
//import { ElectricEqService } from ``'../electric-eq-service';

=======
import { Component, OnInit ,Injectable } from '@angular/core';
import { ElectricEqServiceService } from '../electric-eq-service.service';
>>>>>>> 6c9cb9ffbcd747f5d71fdf94a70d0912cbb94af2


@Component({
  selector: 'app-electric-eq',
  templateUrl: './electric-eq.component.html',
  styleUrls: ['./electric-eq.component.scss']
})
export class ElectricEqComponent implements OnInit {

<<<<<<< HEAD
  //constructor(private consume : ElectricEqService) { }
   public mydata: string;
=======
  constructor(private consume : ElectricEqServiceService) { }

  public mydata: string;
>>>>>>> 6c9cb9ffbcd747f5d71fdf94a70d0912cbb94af2
  private values:any[];
  private selectedUserIdx:number = 0;

  get valArr(){
    return this.values;
  }

<<<<<<< HEAD
  // saveAll()
  // {
  //   this.consume.saveAlleq<any[]>(this.values).subscribe((data : any[])  => this.values = data, error => () => 
  //   {
  //      console.log(error);
  //   },() =>
  //   {
  //      console.log('completed');
  //      this.mydata = JSON.stringify(this.values);
  //      console.log(this.mydata);
  //   });
  // }
=======
  ngOnInit() 
  {
    this.loadData();
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
    this.add();
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
>>>>>>> 6c9cb9ffbcd747f5d71fdf94a70d0912cbb94af2


}
