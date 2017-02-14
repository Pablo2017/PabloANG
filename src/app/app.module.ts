import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Pour pouvoir utiliser le ngModel, il faut ajouter la class FormsModule

import {FormsModule}from '@angular/forms';

import { AppComponent }  from './components/mainCmp/app.component';
import { DahboardComponent }  from './dashboard/dashboard.component';


@NgModule({
  //Ajouter les class dans le tableau des imports
  imports:      [ BrowserModule, FormsModule ],

  //Ajouter les composants dans le tableau des déclarations

  declarations: [ AppComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
