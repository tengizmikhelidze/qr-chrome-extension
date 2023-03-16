import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LinkQrComponent} from "./component/link-qr.component";

const routes: Routes = [
  {
    path: '',
    component: LinkQrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkQrRoutingModule { }
