import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GhibliFilm } from './interfaces/ghibli-films.interface';

function compareNumbers(a, b) {
  return a.rt_score - b.rt_score;
}


@Injectable()
export class AppService {

  constructor(private http: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getGhibliFilms(): Observable<GhibliFilm[]> {
    // return 'hey films list';
    return this.http.get<GhibliFilm[]>( 'https://ghibliapi.herokuapp.com/films')
      .pipe(
        map(response => response.data.sort(compareNumbers))
      );
  }

}
