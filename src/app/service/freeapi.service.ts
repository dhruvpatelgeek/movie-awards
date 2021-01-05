import{Injectable} from '@angular/core'
import{Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'

@Injectable()//declaring a class of type injectable
export class freeapiservice{
    apiKey="xxxxxxxx"// USE YOUR OWN API KEY FORM OMDB<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    url=`https://www.omdbapi.com/?type=movie&apikey=${this.apiKey}&`;//DRY principle
    //now we will inject the httpt client using thr constuctor
    constructor(private httpclient: HttpClient){};

    
    getMoviesByName(name:string): Observable<any> {
        return this.httpclient.get(this.url+"s="+name);
    }

    getMovieDetail(imdbID:string){
        return this.httpclient.get(this.url+"i="+imdbID);
    }
   
}
