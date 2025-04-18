import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OverlayService } from '../../services/overlay.service';
import { CommonModule } from '@angular/common'; // ✅ for *ngIf, async, etc.

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent {
  isVisible$: Observable<boolean>;

  constructor(private overlayService: OverlayService) {
    this.isVisible$ = this.overlayService.isVisible$;
  }

  close() {
    this.overlayService.close();
  }
}
