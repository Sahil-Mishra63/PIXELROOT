import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { WorksComponent } from './projects/works/works.component';
import { DineeaseComponent } from './projects/dineease/dineease.component';
import { provideRouter, withViewTransitions, withRouterConfig } from '@angular/router';


export const routes: Routes = [
    {path: "", component:LandingComponent},
    {path: "Works", component:  WorksComponent},
    {path: "dineease", component: DineeaseComponent},
];

