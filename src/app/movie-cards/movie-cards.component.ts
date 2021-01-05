import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Output,EventEmitter,Input,OnChanges, SimpleChanges, SimpleChange} from '@angular/core';

import {freeapiservice} from '../service/freeapi.service';
import{items} from '../classes/items';



@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent implements OnInit {

  @Output() addToList: EventEmitter<any>=new EventEmitter<any>();
  @Output() showDetailDes: EventEmitter<any>=new EventEmitter<any>();
  @Input() query: string; 
  @Input() buttonArr:Array<string>;

  listItems:items[];
  _item:items;
  description;
  flag=true;
  private subscription: Subscription;

  constructor(private _freeapiservice:freeapiservice){
    
  }

  _addToList(_item:items){
    this.addToList.emit(_item);
  }

  showDetails(id:string){
    this.showDetailDes.emit(id);
  }
  

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if(this.query!=undefined)
      if(this.query.length!=0)
        this.refreshData(this.query);
  }

  isAdded(id:string){
    if(this.buttonArr!=undefined)
      if(this.buttonArr.indexOf(id) == -1)
      {
        return false;
      }
    return true;
  }
  ngOnInit(): void {
    if(this.query==undefined)
      this.query="blade";
    this.refreshData(this.query);
  }
  
  refreshData(input:string)
  {
    this.description="Searching for \""+input+"\" ";
    this._freeapiservice.getMoviesByName(input)
    .subscribe(
      (data)=>{
        this.listItems=data.Search;
        this.description="Showing "+this.listItems.length+" result(s) for \""+input+"\" ";
        for( let i in this.listItems){
          if(this.listItems[i].Poster=="N/A")
          {
            this.listItems[i].Poster="https://www.altavod.com/assets/images/poster-placeholder.png";
          }

        }
      }
    );
  }

}
