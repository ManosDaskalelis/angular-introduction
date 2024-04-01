import { Routes } from '@angular/router';
import { WelcomeComponent } from '../app/components/welcome/welcome.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

export const routes: Routes = [
    {path: 'event-bind-example', component: EventBindExampleComponent},
    {path: "welcome", component: WelcomeComponent},
    {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];
