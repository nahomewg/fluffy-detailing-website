import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [MatFormField, FormsModule, CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<BookingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  serviceList = ['Exterior Wash'];


  ngOnInit() {
    this.data.package === 'extra' ? this.serviceList.push('Floors, Mats, Interior, & Windows') :
    this.data.package === 'gold' ? this.serviceList.push('Floors, Mats, Interior, & Windows', 'Seats & Odor Removal') :
    this.data.package === 'fluffy`s' ? this.serviceList.push('Floors, Mats, Interior, & Windows', 'Seats & Odor Removal', 'Pet Hair Removal, Full Exterior, Tire Shine') : '';
  }

  onClose() {
    this.dialogRef.close();
  }
}
