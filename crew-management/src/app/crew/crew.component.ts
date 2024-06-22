import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CrewDesignationComponent } from '../crew-designation/crew-designation.component';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [MatButtonModule, CrewDesignationComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})

export class CrewComponent { 
  messageForComponent: string =" From Parent";
  receivedMessage: string =""
  

  recevingMessage(message: string): void {
    this.receivedMessage = message;
    
  }
  
}
