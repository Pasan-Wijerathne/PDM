import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-broadband',
  templateUrl: './broadband.component.html',
  styleUrls: ['./broadband.component.scss']
})
export class BroadbandComponent implements OnInit {

  constructor(private http:Http) { }
  broad:object= { };

  addNewBroad = function(broadband)
  {
    this.broad={
      "UserId":broadband.UserId,
      "PackageName":broadband.PackageName,
      "PhoneNumber":broadband.PhoneNumber,
      "Charge":broadband.Charge

    }
    this.http.post("http://localhost:8080/broadband/",this.broad).subscribe((res:Response)=>{
      console.log(res);
    })

  }

  ngOnInit() {
  }

}
