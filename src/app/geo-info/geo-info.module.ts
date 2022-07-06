import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './pages/menu/menu.component';
import { MapBDMEComponent } from './pages/map-bdme/map-bdme.component';
import { ResultGeoInfoComponent } from './pages/result-geo-info/result-geo-info.component';



@NgModule({
  declarations: [
    MenuComponent,
    MapBDMEComponent,
    ResultGeoInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GeoInfoModule { }
