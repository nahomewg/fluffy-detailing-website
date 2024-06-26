import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private http: HttpClient) { }

  // getClients() {
  //   return this.http.get('http://localhost:3000/api/clients');
  // }

  requestAppointment(appointment: any) {
    return this.http.post('http://localhost:3000/api/appointmentRequest/', appointment);
  }

}
