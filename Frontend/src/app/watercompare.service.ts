import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';

@Injectable()
export class WatercompareService {

  public Server = 'http://localhost:8080/'; 

  constructor(private http : HttpClient ) { }

  

}
