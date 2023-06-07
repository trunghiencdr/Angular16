import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {

  private REST_API_SERVER = 'http://localhost:3000/'
  private REST_API_USER = 'https://randomuser.me/api/?result='
  private httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authenization': 'your-token-here'
    })
  }
  constructor(private httpClient: HttpClient) { }

  public getComments(): Observable<any> {
    const url = `${this.REST_API_SERVER}comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getRamdomUser(resultNumber: number): Observable<any> {
    const url = `${this.REST_API_USER}resultNumber`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
  public postComments(newComment: any): Observable<any> {
    const url = `${this.REST_API_SERVER}comments`;
    return this.httpClient.post<any>(url, newComment, this.httpOptions)
  }
}
