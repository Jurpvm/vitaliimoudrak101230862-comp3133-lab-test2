import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IMission } from "../models/mission"

@Injectable({
    providedIn: 'root'
})

export class SpacexapiService{
    private spacexAPI = "https://api.spacexdata.com/v3/launches"

    

}