import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoggingInPageRoutingModule } from './logging-in-routing.module';

import { LoggingInPage } from './logging-in.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoggingInPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [LoggingInPage]
})
export class LoggingInPageModule {}
