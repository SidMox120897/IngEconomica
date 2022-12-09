import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SisFrancesComponent } from './sis-frances/sis-frances.component';
import { SisAmericanoComponent } from './sis-americano/sis-americano.component';
import { SisAlemanComponent } from './sis-aleman/sis-aleman.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    SisFrancesComponent,
    SisAmericanoComponent,
    SisAlemanComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports:[
  ]
})
export class AllProyectosModule { }
