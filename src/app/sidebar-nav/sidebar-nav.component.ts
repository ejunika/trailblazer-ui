import { Component, OnInit, Input } from '@angular/core';
import { INavigation } from '../menu-list/menu-list.component';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {

  @Input()
  sideBarMenus: Array<INavigation>;

  constructor() { }

  ngOnInit() {
    
  }

}
