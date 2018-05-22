import { Component, OnInit } from '@angular/core';
import { ElectserviceService } from '../electservice.service';

@Component({
  selector: 'app-viewbills',
  templateUrl: './viewbills.component.html',
  styleUrls: ['./viewbills.component.scss']
})
export class ViewbillsComponent implements OnInit {

  constructor(private consume : ElectserviceService,private consume2 : ElectserviceService) { }

  public mydata: String;
  public values: any[];

  public mydataw: String;
  public valuesw: any[];

  public mydatat: String;
  public valuest: any[];


  ngOnInit() {
    this.loadData();
    this.loadDataW();
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


loadDataW(){
  console.log('loading data');
  this.consume.getAllW<any[]>().subscribe((data : any[])  => this.valuesw = data, error => () => 
  {
     console.log(error);
  },() =>
  {
     console.log('completed');
     this.mydataw = JSON.stringify(this.valuesw);
     console.log(this.mydataw);
  });
}



}
