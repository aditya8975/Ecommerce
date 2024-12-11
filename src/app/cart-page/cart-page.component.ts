import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/craftitem';
import { Cart } from '../shared/cart';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {



cart!:Cart;
constructor(private cartService:CartService ) {


 
  this.setCart();
 }

  ngOnInit(): void {
  }
  setCart(){
    this.cart=this.cartService.getCart();
  }
removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart();
  
}
chageQuantity(cartItem:CartItem,quantityInString:string){
  const quantity=parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id,quantity);
this.setCart();

}
}
