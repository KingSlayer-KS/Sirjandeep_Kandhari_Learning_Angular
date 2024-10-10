import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ContentListComponent} from "./app/content-list/content-list.component";


const routes: Routes = [
  {path:'', redirectTo: '/product', pathMatch: 'full'}, //default route
  { path: 'product', component: ContentListComponent },
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));