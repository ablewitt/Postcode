import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostcodeData } from './postcodeData';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class PostcodeApiService {

  constructor(private http: HttpClient, private messageService : MessageService) { }

  getPostcode(country: string, postcode: string): Observable<PostcodeData> {
    let url = "http://api.zippopotam.us/"+country+"/"+postcode
    return this.http.get<PostcodeData>(url).pipe(
      catchError(this.handleError<PostcodeData>('getPostcode'))
    )
  }


private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    this.messageService.show("Error " + error.name, error.message)
    return of(result as T);
  };
}
}
