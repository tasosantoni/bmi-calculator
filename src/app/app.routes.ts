import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'introduction',
        loadComponent: () =>
            import('./introduction/introduction.component').then((c) => c.IntroductionComponent)
    },
    {
        path:'graphs',
        loadComponent: () =>
            import('./graphs/graphs.component').then((c) => c.GraphsComponent)
    },
    {
        path:'health-risks',
        loadComponent: () =>
            import('./health-risks/health-risks.component').then((c) => c.HealthRisksComponent)
    }
];
