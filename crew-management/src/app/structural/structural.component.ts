import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng ',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent {

  a = 10;
  b = 5;
  backgroundColor="blue";
  fontSize= "30";

  // items = ['venu', 'saranya','Ravi']
  // test = [10, 20, 30, 40]

  userRole = "admin";

  isActive: boolean = false;
  toggle(){
    this.isActive = !this.isActive
  }

  
  updateStyle(){
    this.backgroundColor = "Orange";
    this.fontSize = "50";
  }

}
