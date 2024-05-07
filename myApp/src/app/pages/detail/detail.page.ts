import { Component, OnInit } from '@angular/core';
import {DataService, Product} from "../../services/data.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  // @ts-ignore
  items:Product[]=[];
   id :string= this.route.snapshot.params['id'];

  constructor(private dataService:DataService,private route: ActivatedRoute) {
    this.dataService.getAllProduct().subscribe((response)=>this.items=response)


  }

  ngOnInit() {


  }

}
