import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const URL = 'https://www.googleapis.com/youtube/v3';
    const KEY = 'AIzaSyAPpc7I6b_9vRxlNmKhigQSWTWCWzhq9PU';
    const COUNT = '20';
    return next.handle(req.clone({
      url: `${URL}/${req.url}`,
      setParams: {
        maxResults: COUNT,
        key: KEY,
      },
    }));
  }

}

