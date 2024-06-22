import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewTimeTableComponent } from './crew-time-table/crew-time-table.component';
import { CrewDesignationComponent } from './crew-designation/crew-designation.component';



@NgModule({
  declarations: [
    CrewTimeTableComponent,
    CrewDesignationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppModuleModule { }
