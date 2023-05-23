import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';
import { Tab } from '../../shared/models/tab.model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  standalone: true,
  imports: [NgIf]
})
export class TabComponent {
  @Input() tab?: Tab;
  @Input() tabWidth = 280;
  @Input() isActive = false;
  @Input() isHovered = false;
  @Input() shouldShrink = false;
  @Output() removeTab = new EventEmitter<void>;
}
