import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppFrComponent } from './app-fr/app-fr.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'en', redirectTo: '', component: AppComponent},
    {path: 'fr', component: AppFrComponent}
];
