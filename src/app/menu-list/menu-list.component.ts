import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
declare var $: any;

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  
  sideNavs: Array<INavigation>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.sideNavs = [
      {id: 1, name: 'Settings', hasChildren: true, children: [
        {id: 11, name: 'User Groups', hasChildren: false},
        {id: 12, name: 'Roles', hasChildren: false},
      ]},
      {id: 1, name: 'Settings', hasChildren: true, children: [
        {id: 11, name: 'User Groups', hasChildren: false},
        {id: 12, name: 'Roles', hasChildren: false},
      ]},
      {id: 1, name: 'Settings', hasChildren: true, children: [
        {id: 11, name: 'User Groups', hasChildren: false},
        {id: 12, name: 'Roles', hasChildren: true, children: [
          {id: 11, name: 'Other', hasChildren: false}
        ]},
      ]}
    ];
    $.sidebarMenu($('.sidebar-menu'));
  }

}

export interface INavigation {
  id: string | number;
  name: string;
  hasChildren: boolean;
  children?: Array<INavigation>
}
