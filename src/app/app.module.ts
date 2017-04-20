import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {InputTextModule ,ButtonModule,GrowlModule } from 'primeng/primeng';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { BodyComponent } from './body/body.component';
import { InfoFeedsComponent } from './info-feeds/info-feeds.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    BodyComponent,
    InfoFeedsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    ButtonModule,
    GrowlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
