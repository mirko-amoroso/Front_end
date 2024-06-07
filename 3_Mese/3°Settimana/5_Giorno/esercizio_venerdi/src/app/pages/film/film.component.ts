import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { iFilm } from '../../modules/i-film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss',
})
export class FilmComponent {
  constructor(private service: AppService) {}

  array_film: iFilm[] = [];

ngOnInit(){
  this.get_films()
}

  get_films = () => {
    this.service.get_all_films().subscribe((data) => {
      this.array_film = data
    });
  };
}
