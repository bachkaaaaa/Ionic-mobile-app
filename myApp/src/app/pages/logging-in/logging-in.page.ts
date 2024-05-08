import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-logging-in',
  templateUrl: './logging-in.page.html',
  styleUrls: ['./logging-in.page.scss'],
})
export class LoggingInPage implements OnInit {
    // @ts-ignore
  ionicForm: FormGroup;

  constructor(private toastController: ToastController, private alertController: AlertController, private loadingController: LoadingController, private authService: AuthServiceService, private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [
        // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
        Validators.required,
      ]
      ],
    });
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    // console.log(this.email + this.password);
    if (this.ionicForm.valid) {

      //  await  loading.dismiss();
      const user = await this.authService.loginUser(this.ionicForm.value.email, this.ionicForm.value.password).catch((err) => {
        this.presentToast(err)
        console.log(err);
        loading.dismiss();
      })

      if (user) {
        loading.dismiss();
        this.router.navigate(
            ['/tab/tab1'])
      }
    } else {
      return console.log('Please provide all the required values!');
    }

  }
  async presentToast(message: string) {
    console.log(message);

    const toast = await this.toastController.create({
      message: "elhedi weld jalila",
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
