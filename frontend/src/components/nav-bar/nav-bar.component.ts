import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  @HostListener('window:scroll', ['$event']) onScroll() {
    this.scrollFunction();
  }

  scrollFunction() {
    const element = document.getElementById("navbar");
    if (element) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  }

}
