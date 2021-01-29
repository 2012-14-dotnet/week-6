import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  label: string = 'this is a label';
  entry: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.entry);
  }
}
