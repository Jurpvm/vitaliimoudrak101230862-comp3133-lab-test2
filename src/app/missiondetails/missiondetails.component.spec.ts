import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MissionDetailsComponent } from "./missiondetails.component";

describe('MissionListComponent', () => {
    let comp: MissionDetailsComponent;
    let fix: ComponentFixture<MissionDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MissionDetailsComponent]
        })
            .compileComponents();
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ MissionDetailsComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fix = TestBed.createComponent(MissionDetailsComponent);
        comp = fix.componentInstance;
        fix.detectChanges();
    });

    it('Created', () => {
        expect(comp).toBeTruthy();
    });
    
});