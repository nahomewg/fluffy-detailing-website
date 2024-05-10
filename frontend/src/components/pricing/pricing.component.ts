import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BaseComponent } from '../base/base.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NavBarComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent extends BaseComponent implements OnInit {

  constructor(private route: ActivatedRoute, router: Router) { super(router) }

  ngOnInit() {
    this.sections = Array.from(document.querySelectorAll("section"));
    this.navTab = Array.from(document.querySelectorAll("nav .icons div"));
    this.changeMobileTab(this.router.url.split('#')[1] ? 'contact' : 'pricing');
  }
}
