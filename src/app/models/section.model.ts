import { SectionItem } from './section-item.model';

export interface Section {
  title: string;
  count: number;
  iconName: string;
  sectionItems?: SectionItem[];
}
