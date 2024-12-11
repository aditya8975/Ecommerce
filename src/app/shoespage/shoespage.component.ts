import { Component, OnInit } from '@angular/core';
import { shoes } from '../shared/shoes';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { __param } from 'tslib';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './shoespage.component.html',
  styleUrls: ['./shoespage.component.css']
})
export class ShoesComponent implements OnInit {
food!:Foods;
  constructor(private activeRoute:ActivatedRoute ,private shoesService:ServicesService,private cartService:CartService,private router:Router) { 
    activeRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food=foodService.getFoodById(params 
    ['id'])
    })
  }

  ngOnInit(): void {
  }
  addToCart(){
this.cartService.addToCart(this.food);
this.router.navigateByUrl('/cart-page')
}
}