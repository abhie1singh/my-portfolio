import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //import home components
import { AboutComponent } from './about/about.component'; //import about component
import { ResumeComponent } from './resumes/resume.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'resumes', component: ResumeComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' } // redirect to home page on load
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);