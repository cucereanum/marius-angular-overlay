import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
})
export class ActionButtonComponent {
  @Input() icon?: string;
  @Input() label?: string;
  @Input() ariaLabel?: string;
  @Input() type: 'primary' | 'icon' = 'primary';
  @Input() size: 'default' | 'large' = 'default';

  @Output() onPress = new EventEmitter<void>();
}
