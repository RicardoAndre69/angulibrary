import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOCK_BOOKS } from '../get-api/books-mock';

@Component({
  selector: 'app-daily-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-book.html',
  styleUrls: ['./daily-book.css']
})
export class DailyBookComponent implements OnInit {

  book: any;

  ngOnInit() {
    this.setDailyBook();
  }

  setDailyBook() {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

    function seededRandom(s: number): number {
      const x = Math.sin(s) * 10000;
      return x - Math.floor(x);
    }

    const randomNumber = seededRandom(seed);
    const index = Math.floor(randomNumber * MOCK_BOOKS.length);

    // pega o livro do dia
    const dailyBook = { ...MOCK_BOOKS[index] };

    // substitui thumbnail -S para -L
    if (dailyBook.thumbnail) {
      dailyBook.thumbnail = dailyBook.thumbnail.replace('-S.', '-L.');
    }

    this.book = dailyBook;
  }
}
