import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from "angularfire2";

import { AppComponent, NavMenuComponent } from './components';
import { FirebaseService } from "./services";

const firebaseConfig = {
  apiKey: "AIzaSyCtCTiWyV5AkeBDWEdZigOEgoatoHOVurw",
  authDomain: "lyric-manager.firebaseapp.com",
  databaseURL: "https://lyric-manager.firebaseio.com",
  storageBucket: "lyric-manager.appspot.com",
  messagingSenderId: "675822039148"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
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
