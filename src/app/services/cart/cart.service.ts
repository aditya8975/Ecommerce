import { Injectable } from '@angular/core';
import { Shoes } from 'src/app/shared/shoes';
import { Cart } from 'src/app/shared/cart';
import { CartItem } from 'src/app/shared/craftitem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart =new Cart();
addToCart(shoes:Shoes):void{
  let cartItem=this.cart.items.find(item=>item.shoes.id === shoes.id)
if(cartItem){
  this.changeQuantity(food.id,cartItem.quantity+1);
  return;
}
this.cart.items.push(new CartItem(shoes));
}
removeFromCart(shoesId:number):void{
  this.cart.items=this.cart.items.filter(item=>item.shoes.id != shoesId)
}
changeQuantity(quantity:number,shoesId:number)
{
  let cartItem=this.cart.items.find(item =>item.shoes.id === shoesId);
  if(!cartItem) return;
  cartItem.quantity=quantity;

}
getCart():Cart{
  return this.cart;
}
}
