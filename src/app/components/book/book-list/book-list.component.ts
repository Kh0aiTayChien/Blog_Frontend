import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../service/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any;
  count: any;

  constructor(private BookService: BookService) {
  }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.BookService.getAll().subscribe(res => {
      this.books = res;
      this.count = this.books.length;
      console.log(this.books);
    })
  }

  deleteBook(id: number) {
    if (confirm(`Ban co chac khong`)) {
      this.BookService.destroy(id).subscribe(res => {
        this.getAllBooks();
      })
    }
  }
}
