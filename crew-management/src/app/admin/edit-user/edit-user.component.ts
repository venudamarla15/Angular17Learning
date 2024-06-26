import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {

  adminName: string = "vdamarla";

  anchroUrl: string = 'https://github.com/venudamarla15/Angular17Learning';
  disabled : boolean = true;
  className: string = 'c1';

  public buttonClicked(){
    this.className = this.className === 'c1' ? 'c2': 'c1';
    this.disabled = !this.disabled;
  }
  captureValue(event: any){
    console.log('capturevalue:'+ '' + event.key);
  }
  onMouseover(event: any){
    this.className = this.className === 'c1'? 'c2' : 'c1';
  }
  onMouseout(event: any){
    this.className = this.className === 'c2'? 'c1' : 'c2';
  }
}
