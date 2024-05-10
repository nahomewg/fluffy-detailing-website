import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends BaseComponent implements OnInit {

  ngOnInit() {
    this.sections = Array.from(document.querySelectorAll("section"));
    this.navTab = Array.from(document.querySelectorAll("nav .icons div"));
  }

}
