import {TestBed} from '@angular/core/testing';
import { SpacexapiService } from './spacexapi.service';


describe('SpacexapiService', () => {
    let spaceservice: SpacexapiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        spaceservice = TestBed.inject(SpacexapiService);
    });

    it('Created', () => {
        expect(spaceservice).toBeTruthy();
    });

});