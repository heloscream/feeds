import { ModuleWithProviders} from '@angular/core';
import { Routes , RouterModule }  from '@angular/router';


import { AppComponent}  from './app.component';

import { BodyComponent } from './body/body.component';
import { AnalysisComponent } from './navigate/analysis/analysis.component';
import { VersionComponent } from './navigate/version/version.component';
import { SocialComponent } from './navigate/social/social.component';
import { SeoComponent } from './navigate/seo/seo.component';


 const router: Routes = [
     {path: '' , redirectTo: 'body', pathMatch: 'full'},
     {path: 'body' , component: BodyComponent},
     {path: 'social', component: SocialComponent},
     {path: 'version', component: VersionComponent },
     {path: 'seo', component: SeoComponent },
     {path: 'analyis', component: AnalysisComponent}     
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
