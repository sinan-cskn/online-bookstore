import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'category/:id', component: BookListComponent},
  {path: 'search/:keyword', component: BookListComponent},
  {path:  '',redirectTo:'/books', pathMatch:'full'},
  {path:  '**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
