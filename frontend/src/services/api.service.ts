import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private http: HttpClient) { }

  requestAppointment(appointment: any) {
    return this.http.post('https://fluffy-backend-0wnl.onrender.com/api/appointmentrequest', appointment);
  }

}
