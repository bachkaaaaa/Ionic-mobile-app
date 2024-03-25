import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoliginPageRoutingModule } from './noligin-routing.module';

import { NoliginPage } from './noligin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoliginPageRoutingModule
  ],
  declarations: [NoliginPage]
})
export class NoliginPageModule {}
