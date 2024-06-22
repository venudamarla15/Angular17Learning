import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';

@Component({
  selector: 'app-crew-designation',
  standalone: true,
  templateUrl: './crew-designation.component.html',
  styleUrl: './crew-designation.component.css'
})
export class CrewDesignationComponent {
  @Input() message: string= "";

  @Output() messageEvent = new EventEmitter<string>();
  

  sendMessage(){
    this.messageEvent.emit("hello from child to parent");
    
  }
}