import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';

@Injectable()
export class InstallmentServiceService {
  public Server = 'http://localhost:8080/';

  constructor(private http : HttpClient) { }

  public createinstallment<T>(data: any[]) : Observable<T>
  {
    console.log("into service method");
    const header = new HttpHeaders();
    header.set('Content-Type', 'applicatio/json');
    return this.http.post<T>(this.Server + "installments/instaedit",JSON.stringify(data), {headers : header});
  }

  public getAll<T>(): Observable<T>
  {
    return this.http.get<T>(this.Server + "installments/instaRead")
  }

  public saveAllEB<T>(data: any[]): Observable<T>{
    console.log('logged');
    return this.http.post<T>(this.Server + "installments/instaRead", data);
}
}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({headers: req.headers.set('Accept', 'application/json')});
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json')});
    console.log(JSON.stringify(req.headers));
    return next.handle(req);
  }
}