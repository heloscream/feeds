import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule,DataGridModule} from 'primeng/primeng';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {CarouselModule} from 'primeng/primeng';

import {InputTextModule ,ButtonModule,GrowlModule,PanelModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

import { InfoFeedsComponent } from './info-feeds/info-feeds.component';
import { ArticleComponent } from './article/article.component';
import { routes } from './app.router';
// services.ts
import { InfoFeedsService } from './info-feeds/info-feeds.service';
import { ArticleService } from './article/article.service';
import { AnalysisComponent } from './navigate/analysis/analysis.component';
import { VersionComponent } from './navigate/version/version.component';
import { SocialComponent } from './navigate/social/social.component';
import { SeoComponent } from './navigate/seo/seo.component';
import { CKEditorModule } from 'ng2-ckeditor';
import {PublishedComponent} from './navigate/published/published.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    InfoFeedsComponent,
    ArticleComponent,
    AnalysisComponent,
    VersionComponent,
    SocialComponent,
    SeoComponent,
    PublishedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    ButtonModule,
    GrowlModule,
    PanelModule,
    BrowserAnimationsModule,
    CarouselModule,
    CKEditorModule,
    DialogModule,
    DataGridModule,
    routes,
    JsonpModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9IUN-rUyNHLK2yiQaRfVahRzCBvdIQiI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
