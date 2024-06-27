import { Component,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.css'
})
export class TwoWayComponent {

  name: string = '';
  isChecked: boolean = false;

  selectedValue: string = '';
  dropDownList: string = '';
  textAreaValue: string = '';

}
