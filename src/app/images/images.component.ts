import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

  
  netflixOriginalsPosters: string[] = [];

  constructor() {
    for(let i = 0; i < 30; i++){
      this.netflixOriginalsPosters.push('/assets/poster.png')
    }
  }
}
