import { CommonModule, formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule,
            CommonModule,
            ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BookingComponent>,
    private fb: FormBuilder,
    private apiService: ApiService
  ) { }

  form: FormGroup;
  serviceList = ['Exterior Wash'];
  formData: {
    name: string,
    email: string,
    phoneNumber: string,
    requestedDate: Date,
    requestedTime: string,
    status: string,
    appointmentType: string
  }

  // appointmentForm = new FormGroup({
  //   firstName: new FormControl('', [Validators.pattern(/\s/), Validators.required]),
  //   lastName: new FormControl('', [Validators.pattern(/\s/), Validators.required]),
  //   phoneNumber: new FormControl('', [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'), Validators.required]),
  //   email: new FormControl('', [Validators.email, Validators.required]),
  //   appointmentDate: new FormControl('', Validators.required),
  //   appointmentTime: new FormControl('', Validators.required)
  // });

  ngOnInit() {
    this.data.package === 'extra' ? this.serviceList.push('Floors, Mats, Interior, & Windows') :
    this.data.package === 'gold' ? this.serviceList.push('Floors, Mats, Interior, & Windows', 'Seats & Odor Removal') :
    this.data.package === 'fluffy`s' ? this.serviceList.push('Floors, Mats, Interior, & Windows', 'Seats & Odor Removal', 'Pet Hair Removal, Full Exterior, Tire Shine') : '';

    this.form = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      appointmentDate: new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en'), Validators.required),
      appointmentTime: new FormControl('', Validators.required)
    });
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get phoneNumber() {
    return this.form.get('phoneNumber');
  }

  get email() {
    return this.form.get('email');
  }

  get appointmentDate() {
    return this.form.get('appointmentDate');
  }

  get appointmentTime() {
    return this.form.get('appointmentTime');
  }

  onSubmit() {
    if (this.form.valid) {
      const newAppointment = this.prepareForm();
      if (newAppointment) {
        this.apiService.requestAppointment(newAppointment).subscribe(data => {
          alert("Your request has been sent!");
          this.onClose();
        })
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  prepareForm() {
    this.formData = {
      name: this.firstName?.value + ' ' + this.lastName?.value,
      email: this.email?.value,
      phoneNumber: this.phoneNumber?.value,
      requestedDate: this.appointmentDate?.value,
      requestedTime: this.appointmentTime?.value,
      status: 'pending',
      appointmentType: this.data.package
    }
    return this.formData;
  }

  onClose() {
    this.dialogRef.close();
  }
}
