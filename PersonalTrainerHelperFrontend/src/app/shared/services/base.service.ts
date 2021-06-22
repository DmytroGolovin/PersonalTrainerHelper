import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private apiUrl : string = "http://localhost:3000/";

  constructor(private _httpClient: HttpClient) {
   }

  public get<T>(path: string, params?: any, headers?: HttpHeaders, authenticated = true): Observable<T>{
    let httpParams;
    if(params){
      httpParams = this.constructQueryParams(params);
    }

    return this.sendRequest<T>(path, 'GET', httpParams, undefined, authenticated, headers);
  }

  public post<T>(path: string, data: any, headers?: HttpHeaders, authenticated = true): Observable<T>{
    return this.sendRequest<T>(path, 'POST', undefined, data, authenticated, headers);
  }

  public put<T>(path: string, data: any, headers?: HttpHeaders, authenticated = true): Observable<T>{
    return this.sendRequest<T>(path, 'PUT', undefined, data, authenticated, headers);
  }

  public patch<T>(path: string, data: any, headers?: HttpHeaders, authenticated = true): Observable<T>{
    return this.sendRequest<T>(path, 'PATCH', undefined, data, authenticated, headers);
  }

  public delete<T>(path: string, data: any, headers?: HttpHeaders, authenticated = true): Observable<T>{
    return this.sendRequest<T>(path, 'DELETE', undefined, data, authenticated, headers);
  }

  private sendRequest<T>(path: string, method: string, params?: HttpParams, data?: any, authenticated: boolean = false, extraHeaders?: HttpHeaders): Observable<any>{
    //This is for development
    const url = this.apiUrl + path;
    //This is the real url
    //const url = this.baseUrl + path;
    let headers = extraHeaders;

    if(headers == null){
      headers = new HttpHeaders();
    }
    if(!headers.has('Content-Type') && !(data instanceof FormData)){
      headers = headers.append(
        'Content-Type',
        'application/json;charset=utf-8'
      );
    }
    if(authenticated){
      headers = headers.append(
        'Authorization',
        'Bearer ' + 'token'
      );
    }

    return this._httpClient.request<T>(method, url, {
      headers: headers,
      observe: 'body',
      body: data,
      params: params,
      responseType: 'json',
    });
  }

  private constructQueryParams(params: any){
    let httpParams: HttpParams = new HttpParams();
    for (var key in params) {
      // skip loop if the property is from prototype
      if (!params.hasOwnProperty(key)) continue;

      if(params[key])
        httpParams = httpParams.append(key, params[key]);
    }
    return httpParams;
  }
}