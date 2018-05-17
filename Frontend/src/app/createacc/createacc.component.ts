import { Component, OnInit } from '@angular/core';
import { Createaccservice } from '../createaccservice';

@Component({
  selector: 'app-createacc',
  templateUrl: './createacc.component.html',
  styleUrls: ['./createacc.component.scss']
})
export class CreateaccComponent implements OnInit {

  constructor(private consume : Createaccservice) { }

  public mydata: String;
  private values: any[];



  ngOnInit()
  {
    console.log('component loaded', this.values);
  }

  adduser()
  {
    this.consume.createacc<any[]>(this.values).subscribe((data : any[]) => data, error => () =>{
      console.log(error);
    },() => 
    {
      console.log('completed');
      this.mydata = JSON.stringify(this.values);
      console.log(this.mydata);
    });
    }
 
  }


