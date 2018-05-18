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
  private compo:number = 1;

  get valArr(){
    return this.values;
  }

  ngOnInit() {
    console.log('component loaded', this.values);
    this.loadData();

  }

  adduser()
  {
    console.log('add user click method');
    this.consume.createacc<any[]>(this.values).subscribe((data : any[]) => data, error => () =>{console.log(error);},() => 
    {
      console.log('completed');
      this.mydata = JSON.stringify(this.values);
      console.log(this.mydata);
      });
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
