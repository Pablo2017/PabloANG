// importer les class pour configurer le module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//  importer le module des routes

import {Routing} from './routing';

// Importer le composant principal
import { AppComponent } from './app.component';
// importer les composants de l'application(pages)
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { HeaderComponent } from './directives/header/header.component';
import { FooterComponent } from './directives/footer/footer.component';


@NgModule({
 //Ajouter tous les composants ds le tableau des déclarations
  declarations: [
    AppComponent,
    DashboardComponent,
    AddstudentComponent,
    EditStudentComponent,
    HeaderComponent,
    FooterComponent,
    // Ajouter les modules dans le tableau des imports 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // Ajouter la class des routes
    Routing

  ],
  providers: [],
  // ajouter le composant principal ds le tableau Bootstrap
  bootstrap: [AppComponent]
})
export class AppModule { }
