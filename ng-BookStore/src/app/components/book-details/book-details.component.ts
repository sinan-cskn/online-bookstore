import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/common/book';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book = new Book();
  constructor(private _bookService: BookService,
    private _activatedRoute: ActivatedRoute) { }
  
    getBookInfo(){
      const id:number = +this._activatedRoute.snapshot.paramMap.get('id');
      this._bookService.getBook(id).subscribe(
        data => this.book=data
      )
    }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(
      ()=>{
        this.getBookInfo();
      }
    )
  }

}
