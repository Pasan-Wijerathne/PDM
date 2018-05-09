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

  ngOnInit() {
    console.log('component loaded');
    this.loadData();
    
  }

  test(evetn){
    console.log('triggered');
  }

  loadData(){
    console.log('loading data');
   
    this.consume.getAll<any[]>().subscribe((data : any[])  => this.values = data,
    error => () => {
       console.log(error);
    },
    () => {
       console.log('completed');
       this.mydata = JSON.stringify(this.values);
    });

  }

  // addData()
  // {
  //   console.log('adding data');

  //   this.consume.add

    
  // }


}
