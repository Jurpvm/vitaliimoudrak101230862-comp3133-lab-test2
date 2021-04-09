import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IMission } from "../models/mission"


@Injectable({
    providedIn: 'root'
})
export class SpacexapiService {
    private spacexAPI = "https://api.spacexdata.com/v3/launches"

    public getMissions(): Observable<IMission[]> {
        return this.http.get<IMission[]>(this.spacexAPI)
            .pipe(
                tap(_ => console.log(_)),
                catchError(this.handleError<IMission[]>('getMissions', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); 
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };



    }

    constructor(private http: HttpClient) { }
}
