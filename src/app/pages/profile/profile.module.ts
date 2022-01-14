import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {TopFreelancersPageModule} from "../top-freelancers/top-freelancers.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    TopFreelancersPageModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
