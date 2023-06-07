import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SearchComponent } from './search/search.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

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
    path: 'templateform', component: TemplateDrivenFormComponent
  },
  {
    path: 'reactiveform', component: ReactiveFormComponent
  },

  {
    path: 'getdata', component: GetDataComponent
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
