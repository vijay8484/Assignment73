import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';


const routes: Routes = [
 
  { path: '', redirectTo: '/technologies', pathMatch: 'full' },
  {path : 'technologies' ,component:TechnologiesComponent},
  {path : 'books', component:BooksComponent},

  // It is our Widcard component
  {path : '**', component:InvalidPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
