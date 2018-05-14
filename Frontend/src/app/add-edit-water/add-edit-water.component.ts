import { Component, OnInit } from '@angular/core';
import { ElectService } from '../elect-service';
import { error } from 'util';

@Component({
  selector: 'app-add-edit-water',
  templateUrl: './add-edit-water.component.html',
  styleUrls: ['./add-edit-water.component.scss']
})
export class AddEditWaterComponent implements OnInit {

  constructor(private consume : ElectService) { }

  public mydata: string;
  private values: any[];
  private compo: number = 0;

  ngOnInit() {
    console.log('component loaded');
    this.loadData();

  }

  test(event){
    console.log.apply('triggered');
  }

  selectRow(index){
    this.compo = index;
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
    });

  }

}
