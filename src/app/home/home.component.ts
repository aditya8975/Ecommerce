import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Shoes } from '../shared/shoes';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shoes:Shoes[]=[];
  constructor(private fs:ServicesService ,private router:ActivatedRoute) { 
    

  }

  ngOnInit(): void {
this.router.params.subscribe(params=>{
if(params['searchItem'])
this.foods=this.fs.getAll().filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
else if(params['tag'])
this.foods=this.fs.getAllFoodByTag(params['tag'])
else
this.foods=this.fs.getAll();
})

  
  }

}
