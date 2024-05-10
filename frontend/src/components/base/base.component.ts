import { Directive } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: 'app-base',
  standalone: true
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
      if (element && sectionIds.includes(element.id)) {
        element.scrollIntoView( { behavior: "smooth" } );
        this.changeMobileTab(element.id == 'about' ? 'home' : element.id);
      }
      else {
        this.router.navigate([sectionId]);
      }
    }

  changeMobileTab(tabId: string) {
    this.navTab.forEach((tab) => {
        tab.classList.remove("active");
        if (tab.id === tabId) {
            tab.classList.add("active");
        }
    });
  }

}
