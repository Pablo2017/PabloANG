import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddstudentComponent,
    EditStudentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
