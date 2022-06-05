import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PokemonListComponent } from "./component/pokemon-list/pokemon-list.component";
import { InformacionComponent } from "./component/informacion/informacion.component";
import { ErrorComponent } from "./component/error/error.component";


//array de rutas
const appRoutes: Routes = [
    { path: '', component: InformacionComponent },
    { path: 'pokemon-list', component: PokemonListComponent},
    { path: 'info/:nombre', component: InformacionComponent },
    { path: '**', component: ErrorComponent }

]

//export el modulo de rutas
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);