import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private url = 'http://localhost:8080/api/v1/rooms';

  constructor(private http: HttpClient) {}

  getRoom(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  createRoom(room: Object): Observable<Object> {
    return this.http.post(`${this.url}`, room);
  }

  updateRoom(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, value);
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  getRoomsList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
