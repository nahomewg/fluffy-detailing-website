import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {

  constructor(public router: Router) {}

    private _currentPage: string;

    private _navTab: HTMLElement[];

    private _sections: HTMLElement[];

    get currentPage() {
        return this._currentPage;
    }

    set currentPage(value) {
        this._currentPage = value;
    }

    get navTab() {
      return this._navTab
    }

    set navTab(value: HTMLElement[]) {
      this._navTab = value;
    }

    get sections() {
      return this._sections
    }

    set sections(value: HTMLElement[]) {
      this._sections = value;
    }

  // Scroll to function, to smoothly navigate through the web page.
    toSection(sectionId: string) {
      const sectionIds = this._sections.map(element => element.id);
      const element = document.getElementById(sectionId);
      console.log(element, sectionIds)
      if (element && sectionIds.includes(element.id)) {
        element.scrollIntoView( { behavior: "smooth" } );
      }
      else {
        console.log(sectionId + ' is not in the list ' + sectionIds);
        this.router.navigate([sectionId], {queryParams: {section: sectionId}});
      }
    }
  // toSection(section: string, tabId = '', navPage = false) {
  //   const element = document.getElementById(section);
  //   element?.scrollIntoView( { behavior: "smooth" } );

  //   if (window.screen.width <= 820 || tabId != '') {
  //       this.changeMobileTab(tabId);
  //   }

  //   if (tabId === '') {
  //       this.changeMobileTab(this.currentPage);
  //   }
  // }

  changeMobileTab(tabId: string, navPage: boolean = false) {
    this.navTab.forEach((tab) => {
        tab.classList.remove("active");
        if (tab.id === tabId) {
            tab.classList.add("active");
            if (navPage) {
                window.location.href = "./" + (tabId === 'home' ? 'index' : tabId === 'contact' ? 'pricing' : tabId) + ".html"
                + (tabId === 'contact' ? '?scrollSection=contact' : '');
            }
        }
    });
  }

}
