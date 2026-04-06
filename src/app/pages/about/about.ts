import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Book, Sparkles, Code, User } from 'lucide-angular';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { applySavedTheme } from '../../utils/theme.util';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  providers: [
    {
      provide: 'LUCIDE_ICONS',
      useValue: { Book, Sparkles, Code, User }
    }
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',

  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ]),

    trigger('staggerCards', [
      transition(':enter', [
        query('.feature-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(150, [
            animate('500ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ])
      ])
    ])
  ]
})
export class About {}
