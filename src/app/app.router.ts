import { ModuleWithProviders} from '@angular/core';
import { Routes , RouterModule } from '@angular/router';


import { AppComponent} from './app.component';
import { ArticleComponent } from './article/article.component';
import { AnalysisComponent } from './navigate/analysis/analysis.component';
import { VersionComponent } from './navigate/version/version.component';
import { SocialComponent } from './navigate/social/social.component';
import { SeoComponent } from './navigate/seo/seo.component';
import { DisplayArticleComponent } from './display-article/display-article.component';


 const router: Routes = [
     {path: '' , redirectTo: 'article', pathMatch: 'full'},
     {path: 'article' , component: ArticleComponent},
     {path: 'social', component: SocialComponent},
     {path: 'version', component: VersionComponent },
     {path: 'seo', component: SeoComponent },
     {path: 'analyis', component: AnalysisComponent},
     {path: 'display-article', component: DisplayArticleComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
