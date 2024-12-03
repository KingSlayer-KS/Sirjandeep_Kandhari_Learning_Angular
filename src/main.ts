import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ContentListComponent} from "./app/content-list/content-list.component";
import { ProductNotFoundComponent } from './app/product-not-found/product-not-found.component';
import { ModifyListComponent } from './app/modify-list/modify-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
ModifyListComponent

const routes: Routes = [
  {path:'', component: ContentListComponent},
  {
    path: 'product',
    loadChildren: () =>
      import('./app/content-list/content-list.component').then((m) => m.ContentListComponent),
  },
  { path: 'modify/:id', component: ModifyListComponent },
  { path: '**', component: ProductNotFoundComponent },
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimationsAsync()]
}).then(r => console.log('Bootstrap successful'));