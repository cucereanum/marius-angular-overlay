import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OverlayService } from '../../services/overlay.service';
import { CommonModule } from '@angular/common';
import { CollapsibleSectionComponent } from '../collapsible-section/collapsible-section.component';
import { OverlayHeaderComponent } from '../overlay-header/overlay-header.component';
import { EntityTableComponent } from '../entity-table/entity-table.component';

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

  businessFunctions = [{ name: 'test 2' }, { name: 'test' }];
  sections = [
    { title: 'Tasks', count: 0, iconName: 'checklist' },
    { title: 'Risks', count: 0, iconName: 'warning' },
    { title: 'Assets', count: 0, iconName: 'inventory_2' },
    { title: 'Incidents', count: 0, iconName: 'report_problem' },
    {
      title: 'Business Functions',
      count: this.businessFunctions.length,
      iconName: 'business_center',
      sectionItems: this.businessFunctions,
    },
    { title: 'Contracts', count: 0, iconName: 'description' },
  ];

  constructor(private overlayService: OverlayService) {
    this.isVisible$ = this.overlayService.isVisible$;
  }

  close() {
    this.overlayService.close();
  }
}
