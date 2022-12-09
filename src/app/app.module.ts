import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllLabosModule } from './all-labos/all-labos.module';
import { SharedModule } from './shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AllProyectosModule } from './all-proyectos/all-proyectos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AllLabosModule,
    SharedModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    AllProyectosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
