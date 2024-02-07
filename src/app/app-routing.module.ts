import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';

const routes: Routes = [
  {path:'landing-page', component: LandingPageComponent},
  {path: 'all-movies', component: AllMoviesComponent},
  {path: '', redirectTo: 'landing-page', pathMatch: 'full'},
  {path:'**', redirectTo:'landing-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
