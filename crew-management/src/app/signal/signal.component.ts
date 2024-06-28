import { Component,Injector,effect,signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { count } from 'rxjs';


@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  counter = signal(0);
  userName = signal('');
  user = signal (['venu Damarla','ANgular17']);

  tutorial = signal({
    title: 'Angular 17 overview',
    description: 'singal in angular17'
  });
  setCount(){
    this.counter.set(20);
    this.updatecount();
  }
  settutorial(){
    this.tutorial.set({
      "title":"New Title",
      "description" : "Signal set tutorial 17"
    })
  }
  UpdateCount(){
    this.counter.update(counter => counter + 60);
  }

  constructor (private injector: Injector){
    
  }

  updatecount(){
    effect(()=>{
      console.log("Value for counter" + this.counter());
      console.log("Value for tutorial" + this.tutorial().title);
    },{injector: this.injector});
  }
}
