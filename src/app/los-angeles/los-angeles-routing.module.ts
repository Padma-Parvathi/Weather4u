import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LosAngelesPage } from './los-angeles.page';

const routes: Routes = [
  {
    path: '',
    component: LosAngelesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LosAngelesPageRoutingModule {}
