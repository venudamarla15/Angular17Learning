import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { CrewComponent } from './crew/crew.component';
import { CrewTimetableComponent } from './crew-timetable/crew-timetable.component';
import { UsersModule } from './users/users.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, CrewComponent, CrewTimetableComponent, UsersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crew-management';
}
