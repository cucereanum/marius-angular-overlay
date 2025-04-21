import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { OverlayService } from './services/overlay.service';
import { OverlayComponent } from './components/overlay/overlay.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'marius-overlay';
  constructor(private overlayService: OverlayService) {}

  openOverlay() {
    this.overlayService.open();
  }
}
