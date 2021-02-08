import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private http: HttpClient
    ) {}

  addPush(sub:any) {
      return this.http.post('/api/notifications', sub);
  }
}
