import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'movie-body',
  templateUrl: './movie-body.component.html',
  styleUrls: ['./movie-body.component.css']
})
export class MovieBodyComponent implements OnInit {

  constructor() { }
  movieList:Array<Movie> = [
    new Movie("Lion King","Animation",2019,"/document/images/lionking.png"),
    new Movie("Mission Impossible 4","Action",2018,"/document/images/mi4.png"),
    new Movie("Avengers:Infinity War","Actions",2018,"/document/images/avngers.png"),
    new Movie("Men In Black","Action",2019,"/document/images/mib2.png"),
  ];



  ngOnInit() {
  }

}
