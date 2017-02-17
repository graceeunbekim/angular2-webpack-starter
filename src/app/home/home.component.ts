import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

import { Title } from './title';

@Component({
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [ Title],
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html'
})

export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  public stickyTimelineWidth: number;
  public stickyConnectWithMeWidth: number;
  public stickyConnectWithMeBar: boolean;

  public @ViewChild('stickyTimelineContent') stickyTimelineContent: ElementRef;
  public @ViewChild('stickyConnectWithMeAnchor') stickyConnectWithMe: ElementRef;

  constructor(public title: Title) {

    this.stickyTimelineWidth = 0;
    this.stickyConnectWithMeWidth = 0;
    this.stickyConnectWithMeBar = false;

  }

  public ngOnInit() {

    // this.title.getData().subscribe(data => this.data = data);
    this.stickyTimelineWidth = this.stickyTimelineContent.nativeElement.clientWidth;

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {

    this.checkForStickyBars();

  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {

     this.checkForStickyBars();

  }

  checkForStickyBars() {

    let stickyConnectWidthMeRect: ClientRect = (<HTMLInputElement>this.stickyConnectWithMe.nativeElement).getBoundingClientRect();

    this.stickyConnectWithMeBar = stickyConnectWidthMeRect.top < 470 ? true : false;

    this.stickyConnectWithMeWidth = this.stickyConnectWithMe.nativeElement.clientWidth;

  }
}
