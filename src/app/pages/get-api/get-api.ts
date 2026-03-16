import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MOCK_BOOKS } from './books-mock';

interface Book {
  title: string;
  authors?: string[];
  publishedDate?: string;
  genres?: string[];
  thumbnail?: string;
  infoLink?: string;
}

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-api.html',
  styleUrls: ['./get-api.css'],
})
export class GetApi implements OnInit {

  query: string = '';

  originalBooks: Book[] = [];
  filteredBooks: Book[] = [];
  books: Book[] = [];

  filterAuthor: string = '';
  filterYear: number | null = null;
  filterGenre: string = '';

  loading: boolean = false;

  /* PAGINAÇÃO */
  currentPage = 1;
  itemsPerPage = 15;
  totalPages = 1;

  constructor(private cd: ChangeDetectorRef) {
    const saved = localStorage.getItem('theme');
    if (saved) {
      document.body.classList.add(saved);
    }
  }

  ngOnInit() {
    this.originalBooks = [...MOCK_BOOKS];
    this.applyFilters();
  }

  getBooks() {

    const q = this.query.trim().toLowerCase();

    if (!q) {
      this.originalBooks = [...MOCK_BOOKS];
    } else {
      this.originalBooks = MOCK_BOOKS.filter(book =>
        book.title.toLowerCase().includes(q)
      );
    }

    this.applyFilters();
  }

  applyFilters() {

    let filtered = [...this.originalBooks];

    if (this.filterAuthor.trim()) {
      const term = this.filterAuthor.trim().toLowerCase();
      filtered = filtered.filter(book =>
        (book.authors || []).some(a =>
          a.toLowerCase().includes(term)
        )
      );
    }

    if (this.filterYear) {
      const yearStr = this.filterYear.toString();
      filtered = filtered.filter(book =>
        book.publishedDate?.startsWith(yearStr)
      );
    }

    if (this.filterGenre.trim()) {
      const gterm = this.filterGenre.trim().toLowerCase();
      filtered = filtered.filter(book =>
        (book.genres || []).some(g =>
          g.toLowerCase().includes(gterm)
        )
      );
    }

    this.filteredBooks = filtered;

    this.totalPages = Math.ceil(
      this.filteredBooks.length / this.itemsPerPage
    );

    this.updatePagination();
  }

  updatePagination() {

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.books = this.filteredBooks.slice(start, end);
  }

  nextPage() {

    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }

  }

  prevPage() {

    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }

  }

  clearFilters() {

    this.filterAuthor = '';
    this.filterYear = null;
    this.filterGenre = '';

    this.applyFilters();

  }

  toggleTheme() {

    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    }

  }
}
