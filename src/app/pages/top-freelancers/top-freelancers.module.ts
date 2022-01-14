import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopFreelancersPageRoutingModule } from './top-freelancers-routing.module';

import { TopFreelancersPage } from './top-freelancers.page';
import {FooterComponent} from "../../component/footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopFreelancersPageRoutingModule
  ],
  declarations: [TopFreelancersPage, FooterComponent]
})
export class TopFreelancersPageModule {}
