import { Component } from '@angular/core';
const QRCode = require("qrcode");
@Component({
  selector: 'app-component',
  templateUrl: './wifi-qr.component.html',
  styleUrls: ['./wifi-qr.component.scss']
})
export class WifiQrComponent {
  ssid: string = '';
  password: string = ''
  wifiQrGenerator() {
    if(this.ssid && this.password){
      let canvas = document.getElementById('canvas');
      if(canvas){
        QRCode.toCanvas(
          canvas,
          `WIFI:T:WPA;S:${this.ssid};P:${this.password};;`,
          function (err: any) {
            if (err) {
              alert('Failed While Generating Qr, \n Error: ' + err);
            }
          }
        );
        // @ts-ignore
        canvas.setAttribute("style", "width: 130px")
        canvas.setAttribute("style", "height: 130px")
      }
    }
  }
}
