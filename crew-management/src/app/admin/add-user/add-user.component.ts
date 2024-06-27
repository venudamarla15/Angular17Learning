import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  //uname = "Venu Damarla";
  addToCart: number =0;
  // interpolation 
  userName: string = '';
  userId: number = 20;
  name: string ='iphone 15 pro Max';
  price: number = 999;
  color: string [] = ['black', 'blue', 'orange'];

  product = {
    name : 'Iphone x',
    price : 999 ,
    color :  'Black',
    discount : 8.95,
    instock : 5
  }

  getDiscountPrice() {
   return this.product.price -(this.product.price * 9.5/100)
  }

  // onNameChange(event: any){
  //   //xxthis.uname = event.target.value;
  // }
  decrement(){
    if(this.addToCart > 0){
      this.addToCart --;
    }
  }
  increment(){
    if(this.addToCart <  this.product.instock)
    this.addToCart ++;
  }

}
