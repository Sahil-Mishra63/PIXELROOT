import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { WorksComponent } from './projects/works/works.component';
import { DineeaseComponent } from './projects/dineease/dineease.component';
import { provideRouter, withViewTransitions, withRouterConfig } from '@angular/router';
import { ProbuildComponent } from './projects/probuild/probuild.component';
import { TecharcadeComponent } from './projects/techarcade/techarcade.component';
import { GgfComponent } from './projects/ggf/ggf.component';


export const routes: Routes = [
    {path: "", component:LandingComponent},
    {path: "Works", component:  WorksComponent},
    {path: "dineease", component: DineeaseComponent},
    {path: "probuild", component: ProbuildComponent},
    {path: "techarcade", component: TecharcadeComponent},
    {path: "ggf", component: GgfComponent}
];

