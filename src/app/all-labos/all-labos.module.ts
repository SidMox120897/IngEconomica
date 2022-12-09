import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaboAComponent } from './labo-a/labo-a.component';
import { LaboBComponent } from './labo-b/labo-b.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    LaboAComponent,
    LaboBComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports:[
    LaboAComponent
  ]
})
export class AllLabosModule { }
