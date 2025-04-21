import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { SectionItem } from '../../models/section-item.model';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-entity-table',
  standalone: true,
  imports: [CommonModule, MatIconModule, ActionButtonComponent],
  templateUrl: './entity-table.component.html',
  styleUrls: ['./entity-table.component.scss'],
})
export class EntityTableComponent {
  @Input() items: SectionItem[] = [];
}
