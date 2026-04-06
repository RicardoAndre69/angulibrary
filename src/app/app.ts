import { Component, signal, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  protected readonly title = signal('angular-library');

  favorites = signal<any[]>([]);

  isOpen = false;

  ngOnInit() {
    const saved = localStorage.getItem('theme') || 'dark-mode';

    const html = document.documentElement;
    html.classList.remove('dark-mode', 'light-mode');
    html.classList.add(saved);
  }


  toggleTheme() {
    const html = document.documentElement;

    const isDark = html.classList.contains('dark-mode');

    html.classList.remove('dark-mode', 'light-mode');

    const newTheme = isDark ? 'light-mode' : 'dark-mode';

    html.classList.add(newTheme);

    localStorage.setItem('theme', newTheme);
  }
}
