import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.css'
})
export class searchUserComponent {
    searchText: string ='';

    updateSearchText(event: any){
      this.searchText = event.target.value;
    }
}
