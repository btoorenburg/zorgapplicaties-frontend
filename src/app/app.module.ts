import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { routing } from './app.routing';

// Import van de firebase modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Import the environment ook voor Firebase.
import { environment } from './../environments/environment';

// Import the ng-bootstrap module wich is comprising the bootstrap components.
// This is needed for the dropdown functionality in the navbar.
// See for all functionality of ng-bootstrap:  ng-bootstrap.github.io
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Next add this also in the importstatements as well at the Root-level.

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppSigninComponent } from './app-signin/app-signin.component';
import { AppRegisterComponent } from './app-register/app-register.component';

import { OpeningComponent } from './components/opening/opening.component';
import { JaarrekeningSelectieComponent } from './components/jaarrekeningselectie/jaarrekeningselectie.component';
import { JaarrekeningComponent } from './components/jaarrekening/jaarrekening.component';
import { ActivaComponent } from './components/activa/activa.component';
import { PassivaComponent } from './components/passiva/passiva.component';
import { OpbrengstenComponent } from './components/opbrengsten/opbrengsten.component';
import { KostenComponent } from './components/kosten/kosten.component';
import { JaarrekeninginvoerComponent } from './components/jaarrekeninginvoer/jaarrekeninginvoer.component';
import { JaarrekeningvergelijkingComponent } from './components/jaarrekeningvergelijking/jaarrekeningvergelijking.component';
import { JaarrekeningkpiComponent } from './components/jaarrekeningkpi/jaarrekeningkpi.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppFooterComponent,
    AppSigninComponent,
    AppRegisterComponent,
    JaarrekeningComponent,
    JaarrekeningSelectieComponent,
    ActivaComponent,
    PassivaComponent,
    OpbrengstenComponent,
    KostenComponent,
    JaarrekeninginvoerComponent,
    JaarrekeningvergelijkingComponent,
    JaarrekeningkpiComponent,
    OpeningComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routing,
    // RouterModule.forRoot(routing),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
