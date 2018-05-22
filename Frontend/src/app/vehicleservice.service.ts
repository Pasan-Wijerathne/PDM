import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VehicleserviceService {

public Server = 'http://localhost:8080/';
        
constructor(private http : HttpClient ) { }

public createacc<T>(data: any[]) :Observable<T>
{
    console.log("into service method");
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.http.post<T>(this.Server + "vehicle/updatevehicle",JSON.stringify(data), {headers : header});
}


public getAll<T>(): Observable<T> {
  return this.http.get<T>(this.Server + "vehicle/readvehicle")
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