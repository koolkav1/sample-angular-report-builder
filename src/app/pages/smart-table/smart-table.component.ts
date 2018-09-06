import { Component, OnInit } from '@angular/core';
import { TableData } from './table-data';
import {  LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})

export class SmartTableComponent implements OnInit {
  source: LocalDataSource;
  settings = {
    columns: {
      name: {
        title: 'Name',
        filter: true
      },
      position: {
        title: 'Position',
        filter: true
      },
      office: {
        title: 'User Name',
        filter: true
      },
      startDate: {
        title: 'Start Date',
        filter: true
      }
    }
  };

 ngOnInit(){}

 constructor() {
  this.source = new LocalDataSource(TableData);
}
onSearch(query: string = '') {
  this.source.setFilter([
    // fields we want to include in the search
    {
      field: 'name',
      search: query
    },
    {
      field: 'position',
      search: query
    },
    {
      field: 'office',
      search: query
    },
    {
      field: 'startDate',
      search: query
    }
  ], false);
}
}
