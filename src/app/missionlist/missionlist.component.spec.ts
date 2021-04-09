import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MissionListComponent } from "./missionlist.component"

describe('MissionListComponent', () => {
    let comp: MissionListComponent;
    let fix: ComponentFixture<MissionListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MissionListComponent]
        })
        .compileComponents();
    })
})