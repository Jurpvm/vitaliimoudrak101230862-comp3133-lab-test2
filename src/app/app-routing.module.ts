import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionDetailsComponent } from './missiondetails/missiondetails.component';
import { MissionListComponent } from './missionlist/missionlist.component';

const routes: Routes = [
  { path: 'missionlist', component: MissionListComponent},
  { path: 'missiondetails', component: MissionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
