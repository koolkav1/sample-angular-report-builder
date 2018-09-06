import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TableData } from '../smart-table/table-data';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';
import { Item } from '../../interfaces/item';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';


@Component({
  selector: 'app-drag-table',
  templateUrl: './drag-table.component.html',
  styleUrls: ['./drag-table.component.scss']
})

export class DragTableComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  renderedData: any;
  subs = new Subscription();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  vamps = [
    { title: "Name" },
    { title: "Position" },
    { title: "Office" },
    { title: "Start Date" },
    { title: "Ext" },
    { title: "Salary" }
  ];

  vamps2 = [
  
   
  ];
  constructor( private dragulaService: DragulaService){
    this.dataSource = new MatTableDataSource(TableData);
    this.dataSource.connect().subscribe(d => this.renderedData = d);
    dragulaService.createGroup("VAMPIRES", {
      revertOnSpill: true
    });
   
     // These will get events limited to the VAMPIRES group.

  //  // some events have lots of properties, just pick the ones you need
   this.subs.add(this.dragulaService.dropModel("VAMPIRES")
     // WHOA
     .subscribe(({ name, el, target, source, sibling, sourceModel, targetModel, item }) => {
       console.log(item);
       this.settingsUpdate(item);
     
       // ...
     })
   );
   

  // { title: "Name" },
  // { title: "Position" },
  // { title: "User Name" },
  // { title: "Start Date" },
  // { title: "Ext" },
  // { title: "Salary" }
  }
  settingsUpdate(item: Item){
   if(item.title === 'Name'){
     this.displayedColumns.push('name');
   } else if(item.title === 'Position'){
     this.displayedColumns.push('position');
   } else if(item.title === 'Office'){
     this.displayedColumns.push('office');
   } else if(item.title === 'Start Date'){
     this.displayedColumns.push('startDate');
   } else if(item.title === 'Ext') {
     this.displayedColumns.push('ext');
   } else if(item.title === 'Salary'){
     this.displayedColumns.push('salary');
   }
  }
  exportCsv(){
    new Angular5Csv(this.renderedData,'Test Report');
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
ngOnInit(){
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}
ngOnDestroy(){
  this.subs.unsubscribe();
}
}
