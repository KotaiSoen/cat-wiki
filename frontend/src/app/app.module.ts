import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './PAGES/home/home.component';
import { AboutCatComponent } from './PAGES/about-cat/about-cat.component';
import { MostSearchedComponent } from './PAGES/most-searched/most-searched.component';
import { FooterComponent } from './PAGES/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobileSearchComponent } from './PAGES/mobile-search/mobile-search.component';
import { ImageHeaderComponent } from './PAGES/image-header/image-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutCatComponent,
    MostSearchedComponent,
    FooterComponent,
    MobileSearchComponent,
    ImageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
