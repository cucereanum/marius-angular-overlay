import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Subscription } from 'rxjs';

import { EntityTableComponent } from '../entity-table/entity-table.component';
import { SectionItem } from '../../models/section-item.model';
import { OverlayService } from '../../services/overlay.service';
import { BadgeComponent } from '../badge/badge.component';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-collapsible-section',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ActionButtonComponent,
    BadgeComponent,
    EntityTableComponent,
  ],
  templateUrl: './collapsible-section.component.html',
  styleUrls: ['./collapsible-section.component.scss'],
  host: {
    '[class.first]': 'isFirst',
  },
  animations: [
    trigger('collapse', [
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
          padding: '*',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          padding: '0 1rem',
        })
      ),
      transition('open <=> closed', animate('200ms ease-in-out')),
    ]),
  ],
})
export class CollapsibleSectionComponent {
  @Input() title: string = '';
  @Input() count: number = 0;
  @Input() iconName?: string;
  @Input() sectionItems: SectionItem[] = [];
  @Input() isFirst: boolean = false;
  isOpen: boolean = false;
  isAnimating: boolean = false;

  private overlaySub!: Subscription;

  constructor(private overlayService: OverlayService) {}

  ngOnInit() {
    this.overlaySub = this.overlayService.isVisible$.subscribe((isVisible) => {
      this.isOpen = false;
    });
  }

  ngOnDestroy() {
    this.overlaySub?.unsubscribe();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onAnimationStart() {
    this.isAnimating = true;
  }

  onAnimationDone() {
    this.isAnimating = false;
  }
}
