import { Component, OnInit } from '@angular/core';
import { UsrUtilService } from '../usr-util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private consume : UsrUtilService) {  }

  public mydata: String;
  public values: any[];

  ngOnInit() {
  }

  // getuser()
  // {
  //   var usr = {"username":"","password":""};
  // }


  // login(){
  //   //loginSerivce code
  //   this.consume.logUserIn<any[]>(this.values).subsribe(function(data){
  //     windows.locaStorage.setItem('uid',data.uuid);
  //   });
  // }
}
