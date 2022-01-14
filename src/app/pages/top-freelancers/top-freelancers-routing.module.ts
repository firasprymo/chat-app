import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopFreelancersPage } from './top-freelancers.page';

const routes: Routes = [
  {
    path: '',
    component: TopFreelancersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopFreelancersPageRoutingModule {}
