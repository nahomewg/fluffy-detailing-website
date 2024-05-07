import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NavBarComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent extends BaseComponent implements OnInit {


  slideIndex: number = 1;

  ngOnInit() {
    this.currentPage = "gallery";
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        this.slideIndex = 1
    }
    if (n < 1) {
        this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
    }
    (slides[this.slideIndex-1] as HTMLElement).style.display = "block";
}


}
