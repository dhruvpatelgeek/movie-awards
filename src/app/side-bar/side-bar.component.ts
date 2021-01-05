import { Component, OnInit } from '@angular/core';
import{items} from '../classes/items';

import { Subscription } from 'rxjs';
import {Output,EventEmitter,Input,OnChanges, SimpleChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  listItems:items[];
  _item:items;

  @Input() query: {movie:items,timestamp:string}; 
  @Output() drop: EventEmitter<any>=new EventEmitter<any>();

  constructor() { 
    this.listItems=[];
  }

  _drop(imdbID:string){
    for(let i in this.listItems)
    {
      if(this.listItems[i].imdbID==imdbID)
      {
        this.listItems.splice(parseInt(i, 10),  1);
        break;
      }
    }
    this.drop.emit(imdbID);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if(this.query!=undefined)
      {
        this.listItems.push(this.query.movie);
      }
  }
}
