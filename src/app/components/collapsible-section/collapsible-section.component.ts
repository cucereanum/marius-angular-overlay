import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { EntityTableComponent } from '../entity-table/entity-table.component';
import { Subscription } from 'rxjs';
import { OverlayService } from '../../services/overlay.service';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-collapsible-section',
  standalone: true,
  imports: [CommonModule, MatIconModule, BadgeComponent, EntityTableComponent],
  templateUrl: './collapsible-section.component.html',
  styleUrls: ['./collapsible-section.component.scss'],
  host: {
    '[class.first]': 'isFirst',
  },
})
export class CollapsibleSectionComponent {
  @Input() title: string = '';
  @Input() count: number = 0;
  @Input() iconName?: string;
  @Input() sectionItems: { name: string }[] = [];
  @Input() isFirst: boolean = false;
  isOpen: boolean = false;

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
}
