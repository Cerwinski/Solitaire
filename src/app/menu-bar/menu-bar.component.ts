import { Component, computed, signal } from '@angular/core';
import { fromEvent, map, tap } from 'rxjs';
import { TabComponent } from './tab/tab.component';
import { NgIf, NgFor, NgOptimizedImage, AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { TabManagementService } from '../shared/services/tab-management.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, TabComponent, NgOptimizedImage, AsyncPipe],
  providers: [TabManagementService],
  animations: []
})
export class MenuBarComponent {
  activeTabIndex = 0;
  hoveredTabIndex = -1;

  private windowWidth$ = fromEvent(window, 'resize').pipe(
    tap(event => console.log('resize event', event)),
    map(event => (event.target as Window).innerWidth),
    tap(width => console.log('width', width))
  );
  readonly cWindowWidth = toSignal(this.windowWidth$, {initialValue: window.innerWidth});

  readonly cIsMobile = computed(() => this.cWindowWidth() <= 480);

  readonly cTabBarWidth = computed(() => {
    const flyoutMenuButtonWidth = 58;
    const newTabButtonWidth = 48;
    const actionButtonsWidth = 4 * 48;
    return this.cWindowWidth() - flyoutMenuButtonWidth - newTabButtonWidth - actionButtonsWidth;
  });

  readonly cTabWidth = computed(() => {
    const minWidth = 80;
    const maxWidth = 280;
    const responsiveWidth = this.cTabBarWidth() / this.tabService.cTabs().length;
    return Math.max(Math.min(responsiveWidth, maxWidth), minWidth);
  });

  readonly cTabsShouldShrink = computed(() =>
    this.tabService.cTabs().length * this.cTabWidth() > this.cTabBarWidth()
  );

  readonly cMaxVisibleTabs = computed(() => {
    const newTabButtonWidth = 48;
    const shrunkTabWidth = 44;
    const remainingWidthForShrunkTabs = this.cTabBarWidth() - newTabButtonWidth - this.cTabWidth();
    return Math.floor(remainingWidthForShrunkTabs / shrunkTabWidth);
  });

  readonly cTabsAreOverflowing = computed(() =>
    this.tabService.cTabs().length > this.cMaxVisibleTabs()
  );

  sFlyoutMenuOpen = signal(false);

  complexObject = signal({a: true, b: 1, c: 'test'});

  constructor(readonly tabService: TabManagementService) {
    this.sFlyoutMenuOpen.update(oldValue => {
      const sideCalculations = 1 + 1;
      return !oldValue;
    });
    this.sFlyoutMenuOpen.update(oldValue => !oldValue);
    this.sFlyoutMenuOpen.mutate(oldValue => {
      oldValue = true;
    });


    this.complexObject.set({a: true, b: 1, c: 'changed'});

    this.complexObject.update(oldValue => {
      oldValue.b = 3;
      oldValue.c = 'changed';
      return oldValue;
    });

    this.complexObject.mutate(oldValue => {
      oldValue.b = 3;
      oldValue.c = 'changed';
    });
  }
}
