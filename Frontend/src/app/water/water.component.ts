import { Component, OnInit, Injectable } from '@angular/core';
import {ConsumsService} from '../consums.service';
import { error } from 'util';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss']
})
export class WaterComponent implements OnInit {

  constructor(private consume : ConsumsService) { 
  }

  public mydata: string;
  private values:any[];


  get valArr(){
    return this.values;
  }

  ngOnInit() {
    console.log('component loaded');
    this.values = [];
    
  }

  test(evetn){
    console.log('triggered');
  }


  // loadData(){
  //   console.log('loading data');
  //   this.consume.getAll<any[]>().subscribe((data : any[])  => this.values = data, error => () => 
  //   {
  //      console.log(error);
  //   },() =>
  //   {
  //      console.log('completed');
  //      this.mydata = JSON.stringify(this.values);
  //   });

  // }

  // saveAll()
  // {
  //   this.consume.save
  // }

  /*
  deletebill()
  {
    this.consume.deletebill(values.).subscribe((data : any[]) =>{
 
    }

  }

  */

}
