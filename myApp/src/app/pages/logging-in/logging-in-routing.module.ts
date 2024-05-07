import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggingInPage } from './logging-in.page';

const routes: Routes = [
  {
    path: '',
    component: LoggingInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggingInPageRoutingModule {}
