import { Component, OnInit } from '@angular/core';
import { InsurancebillService } from '../insurancebill.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  constructor(private consume :InsurancebillService) { }

  public mydata: String;
  public values: any[];
  private selectedUserIdx:number = 0;
  public id:string;

  get valArr(){
    return this.values;
  }

  ngOnInit() {
     this.loadData();
     console.log('component loaded', this.values);    
  }

  test(evetn){
    console.log('triggered');
  }
 
  selectUser(idx){
    console.log('selecting user', idx);
    this.selectedUserIdx = idx;
    console.log(this.selectedUser().accno);
    this.id = this.selectedUser().accno;
    // localStorage.setItem("userid","6");
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

  adduser()
  {
      //var uid = localStorage.getItem("userid");
      var insu = {"userid":"1","accno":"","noofyears":"","dateofnextpremium":"","premium":"","time_interval":""};
      this.values.push(insu);
      this.selectUser(this.values.length - 1);
      console.log('add user method');

  }


  
  getLoggedInUser(){
    return window.localStorage.getItem('uid');
  }
  saveUser(e){
    // e.preventDefaults();
    // this.consume.createacc(this.values);
 
     this.consume.creategas<any[]>(this.values).subscribe((data : any[])  => this.values = data, error => () => 
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

