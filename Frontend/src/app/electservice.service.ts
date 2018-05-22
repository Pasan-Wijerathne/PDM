import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';

@Injectable()
export class ElectserviceService {

  public Server = 'http://localhost:8080/';

  constructor(private http : HttpClient) { }

  public getAll<T>(): Observable<T>
  {
      return this.http.get<T>(this.Server + "billmanager/elecbillread");
  }

  public getAllW<T>():Observable<T>
  {
    return this.http.get<T>(this.Server + "billmanager/getwaterbill");
  }

  public createbill<T>(data: any[]) :Observable<T>
  {
      console.log("into service method");
      const header = new HttpHeaders();
      header.set('Content-Type', 'application/json');
      return this.http.post<T>(this.Server + "billmanager/elecbillsave",JSON.stringify(data), {headers : header});
  }

  public creatwbill<T>(data: any[]) :Observable<T>
  {
      console.log("into service method");
      const header = new HttpHeaders();
      header.set('Content-Type', 'application/json');
      return this.http.post<T>(this.Server + "billmanager/createwaterbill",JSON.stringify(data), {headers : header});
  }

}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    console.log(JSON.stringify(req.headers));
    return next.handle(req);
}
}
