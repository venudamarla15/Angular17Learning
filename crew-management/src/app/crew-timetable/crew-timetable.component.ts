import { Component, EventEmitter, Output } from '@angular/core';
import { CrewComponent } from '../crew/crew.component';


@Component({
  selector: 'app-crew-timetable',
  standalone: true,
  imports: [CrewComponent],
  templateUrl: './crew-timetable.component.html',
  styleUrl: './crew-timetable.component.css'
})
export class CrewTimetableComponent {
}
