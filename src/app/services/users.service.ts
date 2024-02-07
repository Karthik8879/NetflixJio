import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://api.themoviedb.org/3/movie/157336?api_key=9cf7b3eb3d58bc5ca552b9b8d2d4fe3f'

  constructor(private httpClient : HttpClient) { }
}
