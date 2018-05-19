import { Component, OnInit, Injectable } from '@angular/core';
import { UsrUtilService } from '../usr-util.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {

  constructor(private consume : UsrUtilService) { }

  public mydata: String;
  public values: any[];
  private selectedUserIdx:number = 0;

  get valArr(){
    return this.values;
  }

  ngOnInit() {
    console.log('component loaded', this.values);
    this.loadData();

  }

  adduser()
  {
  /*  console.log('add user click method');
    this.consume.createacc<any[]>(this.values).subscribe((data : any[]) => data, error => () =>{console.log(error);},() => 
    {
      console.log('completed');
      this.mydata = JSON.stringify(this.values);
      console.log(this.mydata);
      });
      */

      var usr = {"name":"","password":"","email":"","address":"","nic":""};
      this.values.push(usr);
      this.selectUser(this.values.length - 1);
      console.log('add user method');

  }


  saveUser(e){
   // e.preventDefaults();
   // this.consume.createacc(this.values);

    this.consume.createacc<any[]>(this.values).subscribe((data : any[])  => this.values = data, error => () => 
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
