import { Routes } from '@angular/router'

import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "app/sobre/sobre.component";
import { RestauranteComponent } from "app/restaurantes/restaurantes.component";

export const ROTAS: Routes = [

  	{path: ' ', component: HomeComponent },
  	{path: 'sobre', component: SobreComponent },
 	{path: 'restaurantes', component: RestauranteComponent }

]

