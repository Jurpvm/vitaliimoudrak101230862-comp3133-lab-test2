import { Component, OnInit } from "@angular/core";
import { IMission } from "../models/mission";
import { SpacexapiService } from "../network/spacexapi.service";

@Component({
    selector: 'app-missionlist',
    templateUrl: './missionlist.component.html',
    styleUrls: ['./missionlist.component.scss']
})

export class MissionListComponent implements OnInit {

    missions: IMission[]
    yearsList: number[]
    page: number
    pageSize: number
    closeResult = '';
    constructor(private spaceApi: SpacexapiService) { }

    ngOnInit(): void {
        this.getMissions();
        console.log(this.missions)
    }

    getMissions() : void {
        this.spaceApi.getMissions()
        .subscribe(missions => {
            this.missions = missions
            this.yearsList = [...new Set(missions.map(mish=>(mish.launch_year)))]
            console.log(this.yearsList)
        })
    }

}