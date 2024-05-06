import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit(){
    setTimeout(() => {
      this.navCtrl.navigateForward('/welcome-page'); // Replace '/new-page' with the path of your new page
    }, 5000); // Wait for 5 seconds (5000 milliseconds) before navigating
  }

}
