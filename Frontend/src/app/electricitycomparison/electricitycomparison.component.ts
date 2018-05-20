import { Component, OnInit } from '@angular/core';
import { EleCompaService } from '../ele-compa.service';

@Component({
  selector: 'app-electricitycomparison',
  templateUrl: './electricitycomparison.component.html',
  styleUrls: ['./electricitycomparison.component.scss']
})
export class ElectricitycomparisonComponent implements OnInit {

  constructor(private consume : EleCompaService) { }

  public mydata: String;
  public values: any[];
  
  ngOnInit() {
  }

}
