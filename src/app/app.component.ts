import { Component } from '@angular/core';
import{items} from './classes/items';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-awards';
  changeViewConduit:string; // conduit for communication between search and view 
                            // not using child to child communicaiton because this is much friendler to maintain
  changeChoiceConduit:object;// to route the input form search component to the movie cards component
  // this way in the future it is much easier to add or remove new componenets
  disableButtonsArray=[];// the implement the disabled buttons feature
  // if the imdbID in int he array the button will be disabled
  banner=false;
  // banner to alert useres arter they have selected 5 movies
  detailView=false;
  // boolean that controls if the movie detail will be displayed
  movieObjConduit:object;
  // conduit to move imdb id form movei cards to deatils component
  updateView(input:string){
    
    this.changeViewConduit=input;
  }

  // go back to main view form details
  goBack(event){
    this.detailView=false;
  }
  // go to detials
  showDetails(id){
    this.movieObjConduit=id;
    this.detailView=true;
  }

  // append the side bar with selected movies
  addToSideBar(_item:items){
    if(this.disableButtonsArray.length==5)
    {
      this.banner=true;
      setTimeout(()=>{
        this.banner=false;
      },3000)
    }
    else
    {
      this.disableButtonsArray.push(_item.imdbID);
      if(this.disableButtonsArray.length==5)
      {
        this.banner=true;
        setTimeout(()=>{
          this.banner=false;
        },3000)
      }
      this.changeChoiceConduit={"movie":_item,"timestamp":Date.now()};
    }
    
  }

  // remove movie form side bar
  dropFromSideBar(id:string){
    
    for(let i in this.disableButtonsArray)
    {
      if(this.disableButtonsArray[i]==id)
      {
        this.disableButtonsArray.splice(parseInt(i, 10),  1);
        break;
      }
    }
  }
}
