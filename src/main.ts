import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ContentListComponent} from "./app/content-list/content-list.component";
import { ProductNotFoundComponent } from './app/product-not-found/product-not-found.component';
import { ModifyListComponent } from './app/modify-list/modify-list.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';

const routes: Routes = [
  {path:'', component: ContentListComponent},
  { path: 'product', component: ContentListComponent },
  { path: 'product/:id', component: ModifyListComponent },
  { path: '**', component: ProductNotFoundComponent },
];
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })) // Import providers dynamically
  ],
}).then(r => console.log('Bootstrap successful'));