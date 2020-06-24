import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LosAngelesPageRoutingModule } from './los-angeles-routing.module';

import { LosAngelesPage } from './los-angeles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LosAngelesPageRoutingModule
  ],
  declarations: [LosAngelesPage]
})
export class LosAngelesPageModule {}
