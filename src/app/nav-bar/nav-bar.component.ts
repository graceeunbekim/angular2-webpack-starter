import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

/*
 * Common Nav Bar Component
 */
@Component({
  selector: 'nav-bar',
  styleUrls: ['./nav-bar.style.css'],
  templateUrl: './nav-bar.template.html'
})

export class NavbarComponent {

    @ViewChild('collapsingNavbar') public collapsingNavbar: ElementRef;

    public isCollapsed(): boolean {

        let flag: boolean = !this.collapsingNavbar.nativeElement.classList.contains('show');

        return flag;

    }

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement: HTMLElement) {

        if (!this.elementRef.nativeElement.contains(targetElement)) {

            if (!this.isCollapsed()) {

                this.collapsingNavbar.nativeElement.classList.remove('show');

            }

        }

    }

}
