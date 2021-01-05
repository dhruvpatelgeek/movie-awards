import { Component, OnInit } from '@angular/core';
import {Output,EventEmitter,Input,OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import {freeapiservice} from '../service/freeapi.service';


@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
 
  title:string;
  image:string;
  plot:string;
  actors:string;
  language:string;
  _movieObj:any;

  constructor(private _freeapiservice:freeapiservice){
    this.title="";
    this.image="";
    this.plot="";
    this.actors="";
    this.language="";
  }

  @Input() idString: string; 
  @Output() goBack: EventEmitter<string>=new EventEmitter<string>();

 

  _goBack(){
    this.goBack.emit("true");
  }


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    this.fetchDetails(this.idString);
  }

  fetchDetails(id:string){
    this._freeapiservice.getMovieDetail(id)
    .subscribe(
      (data)=>{
        this._movieObj=data;
        console.log(this._movieObj.Title);
        this.image=this._movieObj.Poster;
        this.plot=this._movieObj.Plot;
        this.actors=this._movieObj.Actors;
        this.language=this._movieObj.Language;
      }
    );
  }
}
