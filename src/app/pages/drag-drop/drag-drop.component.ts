import { Component, OnInit, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit, OnDestroy {
  vamps = [
    { name: "Bad Vamp" },
    { name: "Petrovitch the Slain" },
    { name: "Bob of the Everglades" },
    { name: "The Optimistic Reaper" }
  ];

  vamps2 = [
    { name: "Dracula" },
    { name: "Kurz" },
    { name: "Vladislav" },
    { name: "Deacon" }
  ];

  constructor(private dragulaService: DragulaService) { 
  
    this.dragulaService.dropModel("VAMPIRES").subscribe(args => {
      console.log(args);
    });

  }

  ngOnInit() {
  }
  ngOnDestroy() {
  
  }
}
