import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OverlayService } from '../../services/overlay.service';
import { CommonModule } from '@angular/common';
import { CollapsibleSectionComponent } from '../collapsible-section/collapsible-section.component';
import { OverlayHeaderComponent } from '../overlay-header/overlay-header.component';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule, CollapsibleSectionComponent, OverlayHeaderComponent],
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent {
  isVisible$: Observable<boolean>;
  selectedTab: string = 'Details';

  constructor(private overlayService: OverlayService) {
    this.isVisible$ = this.overlayService.isVisible$;
  }

  close() {
    this.overlayService.close();
  }
}
