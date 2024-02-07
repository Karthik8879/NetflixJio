import { Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
  // styleUrls: ['./all-movies.component.css', './custom-styles.css'],
})
export class AllMoviesComponent {

  
  goodimage : string = "assets/poster.png"
  imageArray = new Array(100000).fill(this.goodimage);






  // imageArray = this.generateImageArray(20);

  // // Function to generate an array of movie objects with unique URLs
  // generateImageArray(count: number): { imageUrl: string }[] {
  //   const result = [];
  //   for (let i = 1; i <= count; i++) {
  //     result.push({
  //       imageUrl: `assets/poster${i}.png`, // Replace with your actual image paths
  //     });
  //   }
  //   return result;
  // }
}
