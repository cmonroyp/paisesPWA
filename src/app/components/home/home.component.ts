import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {

    this.title.setTitle('Home Page Paises');

    this.meta.addTags([
      { name: 'author', content: 'Simple Home' },
      { name: 'keywords', content: 'Angular 6 PWA' },
      { name: 'description', content: 'Implementacion de buenas practicas!.' },
    ])
  }

}
