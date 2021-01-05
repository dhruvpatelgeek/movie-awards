// angular modules==========================================
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//==========================================================

//services==================================================
import{items} from './classes/items';
import {freeapiservice} from './service/freeapi.service';
//==========================================================

//components================================================
import { AppComponent } from './app.component';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { SearchComponent } from './search/search.component';
import { LogoComponent } from './logo/logo.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BannerComponent } from './banner/banner.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
//==========================================================




@NgModule({
  declarations: [
    AppComponent,
    MovieCardsComponent,
    SearchComponent,
    LogoComponent,
    SideBarComponent,
    BannerComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule      
  ],
  providers: [
              freeapiservice,
              items
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
