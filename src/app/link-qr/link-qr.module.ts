import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkQrRoutingModule } from './link-qr-routing.module';
import { LinkQrComponent } from './component/link-qr.component';


@NgModule({
  declarations: [
    LinkQrComponent
  ],
  imports: [
    CommonModule,
    LinkQrRoutingModule
  ]
})
export class LinkQrModule { }
