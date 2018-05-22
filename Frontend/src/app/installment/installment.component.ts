import { Component, OnInit, Injectable } from '@angular/core';
import { InstallmentServiceService } from '../installment-service.service';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.scss']
})
export class InstallmentComponent implements OnInit {
 
  constructor(private consume : InstallmentServiceService) { }

  public mydata: String;
  public values: any[];
  private selectedInstaIdx:number = 0;

  get valArr(){
    return this.values;
  }

  ngOnInit() {
    console.log('component loaded', this.values);
    this.loadData();

  }

  addinsta()
  {

      var inst = {"object":"","serialno":"","amount":"", "years":"", "downpayment":"", "amountpermonth":"","amountpayable":""};
      this.values.push(inst);
      this.selectInsta(this.values.length - 1);
      console.log('add user method');

  }


  saveinsta(e){
   // e.preventDefaults();
   // this.consume.createacc(this.values);

    this.consume.installment<any[]>(this.values).subscribe((data : any[])  => this.values = data, error => () => 
    {
       console.log(error);
    },() =>
    {
       console.log('completed');
       this.mydata = JSON.stringify(this.values);
       console.log(this.mydata);
    });

  }

  selectInsta(idx){
    console.log('selecting installment,', idx);
    this.selectedInstaIdx = idx;
    console.log(this.selectedInsta().name);
  }

  selectedInsta(){
    return this.values[this.selectedInstaIdx];
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
