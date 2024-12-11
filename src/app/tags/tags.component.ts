import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/tag';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

   @Input()
  foodPageTags?: string[];
@Input()
justifyContent:string = 'center';
  tags?:Tag[]=[]
  constructor(private fs:ServicesService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags=this.fs.getAllTag();
  }

}
   