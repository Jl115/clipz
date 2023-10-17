import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';


/**
 * Component that contains a set of tabs and displays the active tab's content.
 */
@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {

  /**
   * QueryList of TabComponents that are children of this component.
   */
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent> = new QueryList<TabComponent>;

  constructor() {}

  /**
   * Lifecycle hook that is called after the component's content has been initialized.
   * Selects the first active tab if no tabs are currently active.
   */
  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(
      tab => tab.active
    )
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first)
    }
  }

  /**
   * Selects the given tab and deselects all other tabs.
   * @param tab - The TabComponent to select.
   * @returns false to prevent default link behavior.
   */
  selectTab(tab: TabComponent) {
    this.tabs?.forEach(tab => {
      tab.active = false;
    });
    tab.active = true;

    return false;
  }
}
