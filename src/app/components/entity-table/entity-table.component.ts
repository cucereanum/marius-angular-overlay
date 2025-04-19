import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-entity-table',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './entity-table.component.html',
  styleUrls: ['./entity-table.component.scss'],
})
export class EntityTableComponent {
  @Input() items: { name: string }[] = [];
}
