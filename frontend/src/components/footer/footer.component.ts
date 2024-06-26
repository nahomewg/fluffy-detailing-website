import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent extends BaseComponent implements OnInit {

  ngOnInit() {
    this.sections = Array.from(document.querySelectorAll("section"));
    this.navTab = Array.from(document.querySelectorAll("nav .icons div"));
  }

}
