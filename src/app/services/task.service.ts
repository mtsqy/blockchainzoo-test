import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  private _url: string = "@/assets/tasklist.json";

  getTaskbyID(id: number): Observable<any> {
    return this.http.get<any>(this._url)
    .pipe(
      map(res => res['task']
      .filter(t => t.id == id)),
    catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(`Failed to fetch task ::ERROR${error}`)
  }
}
