import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoliginPage } from './noligin.page';

const routes: Routes = [
  {
    path: '',
    component: NoliginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoliginPageRoutingModule {}
