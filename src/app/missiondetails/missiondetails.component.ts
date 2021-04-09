import { Component, Input, OnInit } from "@angular/core";
import { IMission } from "../models/mission";
import { SpacexapiService } from "../network/spacexapi.service";

@Component({
    selector: 'app-missiondetails',
    templateUrl: './missiondetails.component.html',
    styleUrls: ['./missiondetails.component.scss']
})

export class MissionDetailsComponent implements OnInit{
    mis: IMission[]
    @Input() spacemissionx: IMission
    constructor(private spaceApi:SpacexapiService) {}

    ngOnInit():void {
        this.getMissions();
        console.log(this.mis)
    }
    getMissions():void{
        this.spaceApi.getMissions().subscribe(mis => this.mis = mis)
    }
    
}