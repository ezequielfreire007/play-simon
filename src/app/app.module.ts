import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimonComponent } from './simon/simon.component';
import {Routes, RouterModule} from '@angular/router';

const miRoute = [
  {path: 'simon', component: SimonComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SimonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(miRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
