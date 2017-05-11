import 'zone.js';
import 'reflect-metadata';

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ElectronService} from './providers/electron.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, HttpModule,
    AppRoutingModule, MaterialModule.forRoot()
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
