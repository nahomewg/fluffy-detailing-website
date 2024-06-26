export interface AppointmentRequest {
  name: string;
  email: string;
  phoneNumber: string;
  requestedDate: Date;
  requestedTime: string;
  appointmentType: string;
  status: string;
}
