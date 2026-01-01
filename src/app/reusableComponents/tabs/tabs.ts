import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {
    @Input() tabs:string[]=[];
    @Input() activeTab:string='';

    @Output() onTabChange = new EventEmitter<string>();

    onSelectTab(slectedTab:string){
      this.activeTab = slectedTab;
      this.onTabChange.emit(slectedTab);
    }
}
