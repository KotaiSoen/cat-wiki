import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCatComponent } from './PAGES/about-cat/about-cat.component';
import { HomeComponent } from './PAGES/home/home.component';
import { MobileSearchComponent } from './PAGES/mobile-search/mobile-search.component';
import { MostSearchedComponent } from './PAGES/most-searched/most-searched.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutCatComponent},
  { path: 'searched', component: MostSearchedComponent},
  { path: 'mobile-search', component: MobileSearchComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
