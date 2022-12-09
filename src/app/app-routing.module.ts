import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboAComponent } from './all-labos/labo-a/labo-a.component';
import { LaboBComponent } from './all-labos/labo-b/labo-b.component';
import { SisAlemanComponent } from './all-proyectos/sis-aleman/sis-aleman.component';
import { SisAmericanoComponent } from './all-proyectos/sis-americano/sis-americano.component';
import { SisFrancesComponent } from './all-proyectos/sis-frances/sis-frances.component';
import { MainComponent } from './shared/main/main.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    pathMatch:'full'
  },
  {
    path:'laboA',
    component:LaboAComponent
  },
  {
    path:'laboB',
    component:LaboBComponent
  },
  {
    path:'sisFrances',
    component:SisFrancesComponent
  },
  {
    path:'sisAmericano',
    component:SisAmericanoComponent
  },
  {
    path:'sisAleman',
    component:SisAlemanComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
