import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { MovieBodyComponent } from './movie-body/movie-body.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieHeaderComponent,
    MovieBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
