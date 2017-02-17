import { Component, OnInit } from '@angular/core';

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
  // TypeScript public modifiers
  constructor(public title: Title) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
