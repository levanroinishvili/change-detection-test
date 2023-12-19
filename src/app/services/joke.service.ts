import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

export interface Joke {
  id: string;
  value: string;
  categories: string[];
  created_at: Date;
  updated_at: string;
  icon_url: string;
  url: string;
}

const endpoint = {
  randomJoke: 'https://api.chucknorris.io/jokes/random',
};

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  private readonly httpClient = inject(HttpClient);

  getRandomJoke$() {
    return this.httpClient
      .get<Joke>(endpoint.randomJoke)
      .pipe(map(joke => joke.value));
  }
}
