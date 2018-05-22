import { Component, OnInit } from '@angular/core';
import { ElectserviceService } from '../electservice.service';

@Component({
  selector: 'app-viewbills',
  templateUrl: './viewbills.component.html',
  styleUrls: ['./viewbills.component.scss']
})
export class ViewbillsComponent implements OnInit {

  constructor(private consume : ElectserviceService,private consume2 : ElectserviceService) { }

  ngOnInit() {
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
  //      console.log(this.mydata);
  //   });

  // }


}
