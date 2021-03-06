import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../common/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookCategory } from '../common/book-category';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://localhost:8080/api/v1/books";
  private categoryUrl = "http://localhost:8080/api/v1/book-category";

  constructor(private httpClient: HttpClient) { }

  getBooks(theCategoryId: number): Observable<Book[]> {
    const searchUrl = `${this.baseURL}/search/categoryid?id=${theCategoryId}`;
    return this.getBooksList(searchUrl);
  }

  private getBooksList(searchUrl: string): Observable<Book[]> {
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(map(response => response._embedded.books));
  }

  getBooksByName(keyword: String): Observable<Book[]> {
    const searchUrl = `${this.baseURL}/search/searchbykeyword?name=${keyword}`;
    return this.getBooksList(searchUrl);
  }

  getBookCategories(): Observable<BookCategory[]> {
    return this.httpClient.get<GetResponseBookCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.bookCategory)
    );
  }
  getBook(bookid: number): Observable<Book>{
    const bookDetailsUrl= `${this.baseURL}/${bookid}`;
    return this.httpClient.get<Book>(bookDetailsUrl);
  }
}

interface GetResponseBooks {
  _embedded: {
    books: Book[];
  }
}
interface GetResponseBookCategory {
  _embedded: {
    bookCategory: BookCategory[];
  }
}
