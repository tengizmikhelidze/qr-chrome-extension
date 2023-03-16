import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'wifi'
      },
      {
        path: 'wifi',
        loadChildren: ()=>
          import('./wifi-qr/wifi-qr.module').then((m)=>m.WifiQrModule)
      },
      {
        path: 'link',
        loadChildren: ()=>
          import('./link-qr/link-qr.module').then((m)=>m.LinkQrModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
