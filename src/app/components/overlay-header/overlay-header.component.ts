import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { OverlayService } from '../../services/overlay.service';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-overlay-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, ActionButtonComponent],
  templateUrl: './overlay-header.component.html',
  styleUrls: ['./overlay-header.component.scss'],
})
export class OverlayHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() tabs: string[] = ['Details', 'Systems', 'References'];
  @Input() selectedTab: string = '';
  @Output() tabChanged = new EventEmitter<string>();

  constructor(private overlayService: OverlayService) {}

  onTabClick(tab: string) {
    this.tabChanged.emit(tab);
  }
  onClose() {
    this.overlayService.close();
  }
}
