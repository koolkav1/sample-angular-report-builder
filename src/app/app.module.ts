import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
//aditional libraries
import { DragulaModule } from 'ng2-dragula';
import { Ng2TableModule, NgTablePagingDirective } from 'ng2-table/ng2-table';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { HomeComponent } from './pages/home/home.component';
import { SmartTableComponent } from './pages/smart-table/smart-table.component';
import { DragTableComponent } from './pages/drag-table/drag-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule, MatSortModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DragDropComponent,
    HomeComponent,
    SmartTableComponent,
    DragTableComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    DragulaModule.forRoot(),
    Ng2TableModule,
    Ng2SmartTableModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
