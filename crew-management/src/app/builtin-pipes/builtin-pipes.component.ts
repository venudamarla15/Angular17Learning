import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-builtin-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './builtin-pipes.component.html',
  styleUrl: './builtin-pipes.component.css'
})
export class BuiltinPipesComponent {
 today: Date = new Date();
 text: string = "hello venu";
 amount: number = 97683654;

}
