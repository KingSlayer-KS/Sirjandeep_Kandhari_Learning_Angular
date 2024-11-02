import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ContentListComponent} from "./app/content-list/content-list.component";
import { ProductNotFoundComponent } from './app/product-not-found/product-not-found.component';
import { ModifyListComponent } from './app/modify-list/modify-list.component';
ModifyListComponent

const routes: Routes = [
  {path:'', redirectTo: '/product', pathMatch: 'full'},
  { path: 'product', component: ContentListComponent },
  { path: 'modify', component: ModifyListComponent },
  { path: '**', component: ProductNotFoundComponent },
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));