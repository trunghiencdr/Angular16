import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: 'search', component: SearchComponent
      }
    ]
  },
  {
    path: 'about', component: AboutComponent
  }, 
  {
    path: '**', component: PageNotFoundComponent
  }, 
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
