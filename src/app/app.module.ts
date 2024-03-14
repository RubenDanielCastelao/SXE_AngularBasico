import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }

bootstrapApplication(AppModule);
