import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'Jane Doe',
      info: 'Architect & Engineer'
    },
    {
      id: 2,
      name: 'John Doe',
      info: 'Interior Designer',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
