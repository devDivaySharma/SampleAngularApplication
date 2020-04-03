import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import { CommonDataService } from '../services/common-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public commonService: CommonDataService) { }
}


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private commonService: CommonDataService) { }
  intercept(request: HttpRequest<any>,next: HttpHandler ): Observable<HttpEvent<any>> {
    this.commonService.showspinner = true;
    debugger;
    request.clone(request);
    return next.handle(request).pipe(
      finalize(() => {
        this.commonService.showspinner = false;
      })
    );
  }
}