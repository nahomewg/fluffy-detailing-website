import { Component, HostListener, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent extends BaseComponent implements OnInit {

  @HostListener('window:scroll', ['$event']) onScroll() {
    this.scrollFunction();
  }

  ngOnInit() {
    this.sections = Array.from(document.querySelectorAll("section"));
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
