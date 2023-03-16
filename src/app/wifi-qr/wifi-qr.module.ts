import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WifiQrRoutingModule } from './wifi-qr-routing.module';
import { WifiQrComponent } from './component/wifi-qr.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    WifiQrComponent
  ],
  imports: [
    CommonModule,
    WifiQrRoutingModule,
    FormsModule
  ]
})
export class WifiQrModule { }
