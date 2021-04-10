import { Component, Input, OnInit } from "@angular/core";
import { IMission } from "../models/mission";
import { SpacexapiService } from "../network/spacexapi.service";

@Component({
    selector: 'app-missiondetails',
    templateUrl: './missiondetails.component.html',
    styleUrls: ['./missiondetails.component.scss']
})

export class MissionDetailsComponent implements OnInit{
    missions: IMission[]
    @Input() missionx: IMission
    constructor(private spaceApi:SpacexapiService) {}

    ngOnInit():void {
        this.getMissions();
        console.log(this.missions)
    }
    getMissions():void{
        this.spaceApi.getMissions().subscribe(missions => this.missions = missions)
    }
    
}