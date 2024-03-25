import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  nextPage() {
    this.navCtrl.navigateForward('/noligin');
  }

}
