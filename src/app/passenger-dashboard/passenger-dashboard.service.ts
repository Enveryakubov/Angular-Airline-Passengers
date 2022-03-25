import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, map, switchMap, of } from 'rxjs';

// const PASSENGER_API: string = 'http://localhost:3000/passengers';

const httpHeader = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PassengerDashboardService {
  PASSENGER_API: string = 'http://localhost:3000/passengers';
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<any> {
    return this.http.get(this.PASSENGER_API);
  }
  updatePassenger(passenger: any): Observable<any> {
    return this.http.put(
      `${this.PASSENGER_API}/${passenger.id}`,

      JSON.stringify(passenger),
      httpHeader
    );
  }
  removePassenger(id: number): Observable<any> {
    return this.http.delete(`${this.PASSENGER_API}/${id}`);
  }
  getPassenger(id: number): Observable<any> {
    return this.http.get(`${this.PASSENGER_API}/${id}`);
  }
}
