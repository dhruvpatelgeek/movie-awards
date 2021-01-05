import { Component, OnInit } from '@angular/core';
import {Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() updateView: EventEmitter<string>=new EventEmitter<string>();

  constructor() { }
  values:string='';
  name:string='';
  ngOnInit(): void {
  }
  
 
  onKey(event: any) { 
    this.values='';
    this.values= event.target.value;
    if (event.keyCode === 13) { // submit request on pressing the enter key

      this.callApi(this.values);
    }
  }

  callApi(input:string){
    
    if(input.length==0)
    {
      this.name=""
    }
    else
    {
      this.name=" Loading results for "+input;
      this.updateView.emit(input);
    }
  }

}
