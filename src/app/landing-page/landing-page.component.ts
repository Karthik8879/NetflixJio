import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  // netflixOriginalsPosters: string[] = [];

  constructor(private router : Router) {
    // for(let i = 0; i < 30; i++){
    //   this.netflixOriginalsPosters.push('/assets/poster.png')
    // }
  }

  isScrolled = false;



  isSearchClicked: boolean = false;
  isSearchIconWhite: boolean = false;
  
  toggleSearch() {
    this.isSearchClicked = !this.isSearchClicked;
    }


  @HostListener('window : scroll', [])
  onScroll(): void{
    this.isScrolled = window.scrollY > 0;
    this.isSearchIconWhite = window.scrollY > 0;
  }

}
