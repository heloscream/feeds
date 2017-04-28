import { ModuleWithProviders} from '@angular/core';
import { Routes , RouterModule,ActivatedRoute } from '@angular/router';


import { AppComponent} from './app.component';
import { ArticleComponent } from './article/article.component';
import { AnalysisComponent } from './navigate/analysis/analysis.component';
import { VersionComponent } from './navigate/version/version.component';
import { SocialComponent } from './navigate/social/social.component';
import { SeoComponent } from './navigate/seo/seo.component';
import {PublishedComponent} from './navigate/published/published.component'

const router: Routes = [
     { path: '' , redirectTo: 'article', pathMatch: 'full'},
     { path: 'article' , component: ArticleComponent,data:{name:'Article Section'}},
     { path: 'social', component: SocialComponent,data:{name:'Social Section'}},
     { path: 'version', component: VersionComponent,data:{name:'Version Section'} },
     { path: 'seo', component: SeoComponent,data:{name:'SEO Section'} },
     { path: 'analyis', component: AnalysisComponent,data:{name:'Analysis Section'}},
     { path: 'published',component:PublishedComponent,data:{name:'published Section'}}
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
