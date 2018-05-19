import { Component, OnInit } from '@angular/core';
//import { ElectricEqService } from ``'../electric-eq-service';


@Component({
  selector: 'app-electric-eq',
  templateUrl: './electric-eq.component.html',
  styleUrls: ['./electric-eq.component.scss']
})
export class ElectricEqComponent implements OnInit {

  //constructor(private consume : ElectricEqService) { }
   public mydata: string;
  private values:any[];

  ngOnInit() {
    console.log('component loaded', this.values);   
  }

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

}
