import {computed, Injectable, signal} from '@angular/core';

@Injectable()
export class TabManagementService {
  private readonly sTabs = signal([
    {name: 'Tab Name', description: 'Supplemental Info', footnote: 'Footnote'},
    {name: 'Tab Name', description: 'Supplemental Info', footnote: 'Footnote'},
    {name: 'Tab Name', description: 'Supplemental Info', footnote: 'Footnote'},
    {name: 'Tab Name', description: 'Supplemental Info', footnote: 'Footnote'},
    {name: 'Tab Name', description: 'Supplemental Info', footnote: 'Footnote'},
    {name: 'Tab Name', description: 'Supplemental Info', footnote: 'Footnote'},
    {name: 'Tab Name', description: 'Supplemental Info', footnote: 'Footnote'},
    {name: 'Tab Name', description: 'Supplemental Info', footnote: 'Footnote'}
  ]);
  readonly cTabs = computed(() => this.sTabs());

  addTab() {
    this.sTabs.update(tabs =>
      tabs.concat({name: 'Tab Name', description: 'Supplemental Info', footnote: 'Footnote'})
    );
  }

  removeTab(indexToRemove: number) {
    this.sTabs.update(tabs =>
      tabs.filter((_, index) => index !== indexToRemove)
    );
  }
}
