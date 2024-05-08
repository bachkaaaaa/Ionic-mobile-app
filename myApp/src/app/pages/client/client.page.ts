import { Component, OnInit } from '@angular/core';
import {DataService, Product} from "../../services/data.service";
import {firstValueFrom} from "rxjs";
import {AuthServiceService} from "../../auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
    imageUrl: any;
    items:Product[]=[];
    // @ts-ignore

  constructor(public dataService:DataService,
              private authService: AuthServiceService,
              private router: Router) { }

  ngOnInit() {

      const currentUser =  firstValueFrom(this.authService.getCurrentUser());
      // @ts-ignore
      this.items=this.dataService.getProductsByUserID(currentUser?.uid.toString())
  }
    navigateToDetails(itemId: string | undefined) {
        console.log('Item ID:', itemId);
        if (itemId) {
            // Navigate to another page with card details
            this.router.navigate(['/detail', itemId]);
        }
    }

}
