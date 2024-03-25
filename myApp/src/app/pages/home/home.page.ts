import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) { }
  ngOnInit() {
    setTimeout(() => {
      this.navCtrl.navigateForward('/welcome-page'); // Replace '/new-page' with the path of your new page
    }, 5000); // Wait for 5 seconds (5000 milliseconds) before navigating
  }
}
