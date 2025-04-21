import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { OverlayService } from '../../services/overlay.service';
import { CollapsibleSectionComponent } from '../collapsible-section/collapsible-section.component';
import { OverlayHeaderComponent } from '../overlay-header/overlay-header.component';
import * as OverlayMock from '../../mocks/overlay-data';
import { SectionItem } from '../../models/section-item.model';
import { Section } from '../../models/section.model';

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
  private defaultTab = 'Details';

  data = OverlayMock;

  get businessFunctions(): SectionItem[] {
    return this.data.businessFunctions;
  }

  get businessSection(): Section {
    return {
      title: 'Business Functions',
      count: this.businessFunctions.length,
      iconName: 'business_center',
      sectionItems: this.businessFunctions,
    };
  }

  sections: Section[] = [
    { title: 'Tasks', count: 0, iconName: 'checklist' },
    { title: 'Risks', count: 0, iconName: 'warning' },
    { title: 'Assets', count: 0, iconName: 'inventory_2' },
    { title: 'Incidents', count: 0, iconName: 'report_problem' },
    this.businessSection,
    { title: 'Contracts', count: 0, iconName: 'description' },
  ];

  constructor(private overlayService: OverlayService) {
    this.isVisible$ = this.overlayService.isVisible$;

    this.isVisible$.subscribe((isVisible) => {
      if (isVisible) {
        this.resetOverlayState();
      }
    });
  }

  close() {
    this.overlayService.close();
  }

  private resetOverlayState() {
    this.selectedTab = this.defaultTab;
  }
}
