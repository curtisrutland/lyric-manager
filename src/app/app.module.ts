import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from "angularfire2";

import { AppComponent, NavMenuComponent } from './components';
import { FirebaseService } from "./services";
import { environment } from "../environments/environment";
import { SongListComponent } from './components/song-list/song-list.component';

const firebaseConfig = environment.fbConfig;

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    FormsModule,
    HttpModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
