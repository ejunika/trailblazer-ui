import { Component, OnInit, Input } from '@angular/core';
import { INavigation } from '../menu-list/menu-list.component';

@Component({
  selector: 'app-sidebar-sub-nav',
  templateUrl: './sidebar-sub-nav.component.html',
  styleUrls: ['./sidebar-sub-nav.component.scss']
})
export class SidebarSubNavComponent implements OnInit {


  @Input()
  sidebarSubMenus: Array<INavigation>;

  constructor() { }

  ngOnInit() {
  }

}
