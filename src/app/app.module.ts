import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { AppSidepanelComponent } from './app-sidepanel/app-sidepanel.component';
import { AppMainpanelComponent } from './app-mainpanel/app-mainpanel.component';
import { AppSigninComponent } from './app-signin/app-signin.component';
import { AppRegisterComponent } from './app-register/app-register.component';
import { JaarrekeningComponent } from './jaarrekening/jaarrekening.component';



@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppFooterComponent,
    AppSidepanelComponent,
    AppMainpanelComponent,
    AppSigninComponent,
    AppRegisterComponent,
    JaarrekeningComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
