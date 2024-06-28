import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.css'
})
export class searchUserComponent {
    searchText: string ='';

    updateSearchText(event: any){
      this.searchText = event.target.value;
    }

    
    // listOfString: string[] = ['Venu', 'saranya', 'ravi']
    mainMenuItem : string[] = ['Home','Products','Sale','New Arrival','Contact']
 }
