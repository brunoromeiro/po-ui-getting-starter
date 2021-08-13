import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/', icon: 'po-icon-home', shortLabel: 'Home' },
    { label: 'Table', shortLabel: 'Table', icon: 'po-icon-table', subItems: [
      {label: 'Simple', shortLabel: 'Single', link: 'table/simple', icon: 'po-icon-star' },
      {label: 'Service', shortLabel: 'Service', link: 'table/service', icon: 'po-icon-star-filled'}
      ]
    },
    {label: 'Dynamic', link: 'dynamic/form', icon: 'po-icon-user', shortLabel: 'Dynamic'}
  ];

}
