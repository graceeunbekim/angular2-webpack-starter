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

  @ViewChild('stickyTimelineContent') public stickyTimelineContent: ElementRef;
  @ViewChild('stickyConnectWithMeAnchor') public stickyConnectWithMe: ElementRef;

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
  public onWindowScroll(event: Event) {

    this.checkForStickyBars();

  }

  @HostListener('window:resize', ['$event'])
  public onWindowResize(event: Event) {

     this.checkForStickyBars();

  }

  public checkForStickyBars() {

    let stickyConnectWithMeRect: ClientRect;
    stickyConnectWithMeRect = ( <HTMLInputElement> this.stickyConnectWithMe.nativeElement ).getBoundingClientRect();

    this.stickyConnectWithMeBar = stickyConnectWithMeRect.top < 470 ? true : false;

    this.stickyConnectWithMeWidth = this.stickyConnectWithMe.nativeElement.clientWidth;

  }
}
