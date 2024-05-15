import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [MatFormField, FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  constructor( public dialogRef: MatDialogRef<BookingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }


  onClose() {
    this.dialogRef.close();
  }
}
