import { Component, OnInit } from '@angular/core';


// Denk eraan om de selector aan te passen een een keer app te verwijderen.
// De selector wordt dan van app-app-navbar    app-navbar
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
