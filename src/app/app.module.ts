import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

export const firebaseConfig = {
  apiKey: "AIzaSyBTCf2kNZC_FsvgAIxmG-UdljaGK584LIk",
  authDomain: "chatapp-3d651.firebaseapp.com",
  databaseURL: "https://chatapp-3d651.firebaseio.com",
  projectId: "chatapp-3d651",
  storageBucket: "",
  messagingSenderId: "1038652865094"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
