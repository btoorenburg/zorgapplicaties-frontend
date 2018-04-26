// app.routing.ts
// Definities van de Routes.
// Opsteller: Bas Toorenburg
// Datum invoer 23-4-2018

// De login en de register routes dienen nog ingevoerd te worden.
import { Routes, RouterModule } from '@angular/router';
import { OpeningComponent } from './components/opening/opening.component';
import { JaarrekeningComponent } from './components/jaarrekening/jaarrekening.component';
import { JaarrekeninginvoerComponent} from './components/jaarrekeninginvoer/jaarrekeninginvoer.component';
import { JaarrekeningvergelijkingComponent} from './components/jaarrekeningvergelijking/jaarrekeningvergelijking.component';
import { JaarrekeningkpiComponent} from './components/jaarrekeningkpi/jaarrekeningkpi.component';

const routes: Routes = [
  { path: '', component: OpeningComponent},
  { path: 'jaarrekening', component: JaarrekeningComponent},
  { path: 'jaarrekeninginvoer', component: JaarrekeninginvoerComponent},
  { path: 'jaarrekeningvergelijking', component: JaarrekeningvergelijkingComponent},
  { path: 'jaarrekeningkpi', component: JaarrekeningkpiComponent} ];

export const routing = RouterModule.forRoot(routes);
