import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: 'app.component.html'
  // template: `
  // <router-outlet></router-outlet>
  // `
})
export class AppComponent implements OnInit {
  title = 'fluffyDetailing';
  message: any;

  constructor(private apiService: ApiService) { };

  ngOnInit() {
      this.apiService.getMessage().subscribe(data => {
        this.message = data;
      })
  }
}
