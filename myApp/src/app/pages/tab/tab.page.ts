import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  constructor(private authService: AuthServiceService,private toastController:ToastController,private router: Router) { }

  ngOnInit() {
  }
  
  signOut() {
    this.authService.signOut()
      .then(() => {
        // Handle successful sign-out (optional)
        console.log('Signed out successfully!');
        this.presentToast("");
        this.router.navigate(['/article-list']);

        // You can navigate to a login page or perform other actions here
      })
      .catch(error => {
        // Handle sign-out errors (optional)
        console.error('Error signing out:', error);
        // Display an error message to the user, or take other corrective actions
      });
  }
  async presentToast(message: string) {
    console.log(message);

    const toast = await this.toastController.create({
      message: "Signed out Successfully",
      duration: 1500,
      position: 'top',
      color:'success'

    });

    await toast.present();
  }

}
