import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.css']
})
export class MovieHeaderComponent implements OnInit {

  constructor() { }
 storename:string = "Druids Movie"; 
  ngOnInit() {
  }

}
