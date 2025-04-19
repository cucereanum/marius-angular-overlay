import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-collapsible-section',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './collapsible-section.component.html',
  styleUrls: ['./collapsible-section.component.scss'],
})
export class CollapsibleSectionComponent {
  @Input() title: string = '';
  @Input() count: number = 0;
  @Input() iconName?: string;
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
