import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { EntityTableComponent } from '../entity-table/entity-table.component';

@Component({
  selector: 'app-collapsible-section',
  standalone: true,
  imports: [CommonModule, MatIconModule, EntityTableComponent],
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

  ngOnInit() {
    console.log('Section Items:', this.title, this.isFirst);
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
