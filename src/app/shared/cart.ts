import { CartItem } from "./craftitem";

export class Cart{
    items:CartItem[]=[];


    get totalPrice():number{
        let totalPrice =0;
        this.items.forEach(item =>{
            totalPrice += item.price;
        });
        return totalPrice;
    }
}