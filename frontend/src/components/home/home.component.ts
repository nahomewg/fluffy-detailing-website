import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseComponent implements OnInit {


  ngOnInit() {
    this.sections = Array.from(document.querySelectorAll("section"));
    this.navTab = Array.from(document.querySelectorAll("nav .icons div"));
    this.changeMobileTab('home');
  }
}
