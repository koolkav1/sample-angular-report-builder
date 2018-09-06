import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { HomeComponent } from './pages/home/home.component';
import { SmartTableComponent } from './pages/smart-table/smart-table.component';
import { DragTableComponent } from './pages/drag-table/drag-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'drag', component: DragDropComponent},
  { path: 'table', component: SmartTableComponent},
  { path: 'table-builder', component: DragTableComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
